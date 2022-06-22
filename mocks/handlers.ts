import { graphql } from 'msw';
import { spells } from './queries/spells';

export const handlers = [graphql.query('Spells', spells)]; // note: Casing for operation name must match the query from List.graphql.ts ("Spells")
