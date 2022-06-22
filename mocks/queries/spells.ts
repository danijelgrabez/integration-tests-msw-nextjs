import { generateList } from '../generators/list';

// TODO: TYPE ME

export const spells = (req: any, res: any, ctx: any) => {
  return res(ctx.delay(1000), ctx.data({ spells: generateList() }));
};
