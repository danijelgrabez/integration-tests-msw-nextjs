# Test Data Bot

- https://github.com/jackfranklin/test-data-bot

# Capabilities

```ts
const userBuilder = build<User>({ // 1. Typed object mother with autocomplete capability
  fields: {
    name: 'BoJack Horseman'
    id: sequence(), // 2. Incrementing IDs with sequence
    email: sequence(s => `user-${s}@email.com`) // 2a. Combining sequence with other data
    status: oneOf('active', 'inactive', 'blocked'), // 3. Randomly picking between an option
    isAdmin: bool(), // 4. Boolean
    lastName: perBuild(() => faker.name.firstName()) // 5. Integrate with fake generator libraries (perBuild make sure two generated objects never have the same value)
    postBuild: data => { // 6. If you need to transform an object in a way that test-data-bot doesn't support out the box
      data.status = user.name.toUpperCase();
      return user;
    }
  })

```

### Override builder

```ts
// Usage
userBuilder();

// Override
userBuilder({ overrides: { isAdmin: false } }); // Note: typed properly, overridden field has to match defined builder type
```

### Traits

Traits let you define a set of overrides for a factory that can easily be re-applied.

```ts
const userBuilder = build<User>({
  fields: {
    name: 'jack',
    admin: perBuild(() => false),
    status: 'inactive',
  },
  traits: {
    admin: {
      overrides: { admin: perBuild(() => true), status: 'active' },
    },
  },
});

const adminUser = userBuilder({ traits: 'admin' }); // no need to override multiple fields, it is taken care from the builder
```
