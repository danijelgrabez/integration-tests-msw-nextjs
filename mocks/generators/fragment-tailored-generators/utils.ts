// NOTE: Rough idea, not complete solution

/**
 * AST to validator
 * GQL Introspection → [['field', undefined], ['field', [['nested', undefined]]]]
 */
// @ts-ignore
export const toValidator = (obj: any) => {
  if (obj.kind === 'Document') {
    return obj.definitions.map(toValidator);
  }

  if (obj.kind === 'FragmentDefinition') {
    return toValidator(obj.selectionSet);
  }

  if (obj.kind === 'SelectionSet') {
    const res = obj.selections.map((selection: any) => {
      if (selection.kind === 'Field') {
        const selections = selection?.selectionSet?.selections;
        return [selection.name.value, selections?.map(toValidator)];
      }
    });

    return res;
  }

  if (obj.kind === 'Field') {
    const selections = obj?.selectionSet?.selections;
    obj;

    return [obj.name.value, selections?.map(toValidator)];
  }
};

/**
 * Mapper
 * (fixture, validator) → { desired fields }
 */
export function mapper<I, O>(fixture: I, validator: [any]): O {
  const res = Array.isArray(fixture) ? [] : {};
  // @ts-ignore
  if (!validator) return res;

  if (Array.isArray(fixture)) {
    // @ts-ignore
    res.push(...fixture.map((f) => mapper(f, validator)));
  } else {
    for (const [key, next] of validator) {
      if (!next) {
        // @ts-ignore
        res[key] = fixture[key];
      } else {
        // @ts-ignore
        if (Array.isArray(fixture[key])) {
          // @ts-ignore
          res[key] = fixture[key].map((f) => mapper(f, next));
        } else {
          // @ts-ignore
          res[key] = mapper(fixture[key], next);
        }
      }
    }
  }

  return res as O;
}
