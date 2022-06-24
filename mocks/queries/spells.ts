import { buildListWithTenItems, generateList } from '../generators/list';

// TODO: TYPE ME

export const spells = (req: any, res: any, ctx: any) => {
  return res(ctx.delay(1000), ctx.data({ spells: generateList() }));
  return res(ctx.delay(100), ctx.data({ spells: buildListWithTenItems() }));
};
