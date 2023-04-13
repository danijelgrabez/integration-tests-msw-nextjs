# Fragment (or query) tailored generators

This folder explain how might we construct the final fixture based on the defined query or fragment.

Ingredients:

1. fixture builder that is defined by the GraphQL type
2. AST generated from `/generated/graphql.ts` file (variables that ends with `Doc`, like `SpellDcFragmentDoc`)
3. filter utility from 'graphql-anywhere'

```js
// Fixture defined by the builder
{
  "__typename": "SpellDc",
  "desc": "Example description",
  "success": "HALF",
  "type": {
    "__typename": "AbilityScore",
    "desc": [
        "A",
        "B",
        "C"
    ],
    "full_name": "Full name of the ability builder",
    "index": "index",
    "name": "Name",
    "skills": []
  }
}

// Expected fixture from the fragment
{
  "desc": "Example description",
  "type": {
      "full_name": "Full name of the ability builder"
  }
}
```
