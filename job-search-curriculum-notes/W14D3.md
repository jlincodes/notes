# Reprise Lecture

## What is Rails?
- a server-side (backend) MVC (Model, View, Controller) web application framework written in the Ruby language.
- web app is a website that is dynamic and interactive, but a static website is not a web app
- framework a bundle of software for a specific purpose

## What are other web-app frameworks?
JS: Ember, Express (micro-framework)
PHP: Laravel, Symfony
Python: Django, Flash (micro-framework)
Ruby: Rails, Sinatra (micro-framework)

## What is MVC?
- a software architechtural pattern
- Flex
- divides an application into 3 interconnected parts
- originally developed for desktop graphical user interfaces (GUI's), MVC was one of the first approaches to describe and implement software constructs in terms of their responsibilities

- Determines controller action: HTTP VERB and PATH/URI

## The Rails Philosophy:
- Don't repeat yourself
  - By not writing the same code over and over again, your app becomes more maintainable, more extensible and less buggy
- Convention over configuration
  - Rails has options about the best way to do many things in a web application
  - It defaults to this set of Convention
  - You only figure what differs from the convention
  - You may hear people refer to it as an opinionated framework

# Active Record:
## Migrations:
- allow you to evolve your database schema over time
- rather than write schema modifications in pure SQL, you can use an easy Ruby DSL (domain-specific language) to describe changes to your table.

```Ruby
class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
```
- Generating a migration creates a class (must have unique names).
- In the migration class, there is a change method.
`create_table` is a method followed by the table name, `:users`. Following that is a code block.
- Index is a data structure that allows us to find things quickly. Linear search/table scan. Main con of having an index is that it takes up a lot of space.
- Always add index foreign keys!
- Always add index to force uniqueness. Rails has to do a tablescan to check for uniqueness before saving a record.
- change method did not exist in the "olden days" prior to Rails 4
- before change method, there was up and down. now there is change and drop. change takes in info (table name, table column names, etc.), but drop does not. Thus rolling back a drop doesn't work.

## Common migration methods:
- create_table
- change_table
- add_column
- add_index
- remove_column

## Creating Migrations
- `rails db:migrate`
- runs `change` or `up` method for all the migrations that have not yet been run
- runs migrations in order based on the timestamp of the migration
- updates your `schema.rb` file to match the structure of your database
- rails db schema load
- migrations are stored in db/migrate directory one for each migration cclass
- the name of the file is of the form YYYYMMDDHHMMSS_create_migration.rb
- if you have already migrated a migration, you can't just edit the migration
- rails thinks it has already run the migration so will do nothing when you runs `db:migrate`
- instead:
  - rollback the migration (`rails db:rollback`)
  - edit migration
  - run `rails db:migrate` to run the corrected version
- edit exiting migrations is not a good idea if they have already been pushed to a remove version control repository (i.e. Github)
  - instead, write a new migration that performs the changes you require
- In terminal:
  - `psql common_things_development`
  - `\d`


## Database Constraints:
- database-level constraints enforce data-integrity (make sure that only valid data is entered)
- most common constraints:
  - `null: false`
  - `unique: true`
- Create a new rails project
  - `rails new common_things -d=postgesql`
  - SQLite - no server, it's locally in the app; good for mobile app
  - PostgeSQL - db is separate from the app; it is it's own db; preferred for web apps
- Create models + migration:
  - `rails g model User username:string:index`
  - `rails g model Post title:string user_id:integer body:text`
  - `add_index :posts, :user_id, unique:true`
  - add_index for foreign keys. Why? Because we look up all posts by user_id instead of doing a table scan of the entire posts table.
  - Like table is a joins table `rails g model Like user_id:integer post_id:integer`
  - We want to index both columns of the Likes table
    - Nested index: `add_index :likes, [:post_id, :user_id], unique: true` - Say you wanted to unlike a particular post: first looks up a post, then looks up the user. Order matters for nested indices. The first value should narrow your search the quickest.
    - `add_index :likes, :user_id, unique: true`

#### side note:
- skip turbolinks - for frontend for single-page apps

## Model
- The central component of the MVC pattern
- Expresses the application's behavior independent of the user interface
- Represents and directly manages the data, logic, and rules of the application
- There is a one-to-one correspondence between a model and what it represents in the world
- Validations, associations, and custom class methods
- `rails g model User` generates both the model and the migration
- Fat models, slim controllers

## Model-level validations
- Model objects may be created, updated, and destroyed. this refers to the object life cycle
- Active record provides hooks into this life cycle so that you can control you application and its data
- Validations are used to ensure that only valid data is saved into your database
- These lifecycles methods, also called callbacks, allow you to trigger logic before or after an alteration of an object's state. Validates is a method that accepts a symbol and sends it as a message using metaprogramming to User, User.username.
- callbacks in Ruby are different from callbacks in JS because Ruby doesn't have true first-class functions. Ruby methods depend on Ruby objects.
- performed at each execution of `save`/`save!` and `valid?` (side note: method_name? predicate methods, return boolean)
  - in any validation fails the ruby object will not be committed to the database
- stores any errors in the model object
  - accessible by calling `rubyobject.errors.full_messages`
- common validations:
  - `presence: true`
    - analogous to the `null:false`
  - `uniqueness: true`
    - analogous to `unique:true`
    - should add_index in db for uniqueness validation for quick look-up

## Database constraints vs model validations
- Model validations are best used to provide error messages to users interacting with your app
- It's highly likely that:
  - you will interact with the db at some point outside of Rails
  - you will make a mistake in your code that causes invalid data
- Database constraints are the last line of defense for data-integrity
- Writing constraints is work but they will save you a lot of pain
- If two users try to make accounts with the same username at the same time, model-level validations could fail, which is where db-level constraints come in

## Associations
- connections between two active record models
- make common
