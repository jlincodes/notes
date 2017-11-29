# GraphQL
- graphql is an alternative RESTful API

## Why should I care?
- more and more companies are adopting it

## What problems does GraphQL solve?
1. Increased mobile usage created need for more efficient client server communication
2. Variety of client applications that all have slightly different requirements
3. Expectation of rapid feature development

## GraphQL vs RESTful comparison
- What data is being returned with this RESTful API request?
`GET: api/users/1729`
- probably a JSON object with all the data of user with the id 1729
## How many response cycles does it take to get a users chirps and followers
- 3

```
query {
  getUser(user_id: 1729) {
    id
    email
    followers: {
      ...
    }
  }
}
```

## Bonuses for using GraphQL
- solves over/under fetching issues (N + 1)
- allows for easy client side caching
- allows for parallelization for workflow (FE/BE)
- can integrate legacy services, microservices, external API's

## Downsides of GraphQL
- difficult to implement server side caching
- upfront costs of setting up a gql server
- GraphQL is a thin data application layer; does not solve all the problems
- lack of documentation and tooling, especially for Ruby, because it's still new

## Common misconceptions
- API technology; not a database technology
- Specification
