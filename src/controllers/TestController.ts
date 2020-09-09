import { Controller, Get, Status, PathParams, QueryParams } from '@tsed/common';

@Controller('/test')
export class TestController {
  @Get('/:pathParam1?/:pathParam2?')
  @Status(200)
  public getInfo(
    @QueryParams() query: any,
      @PathParams('pathParam1') pathParam1?: number,
      @PathParams('pathParam2') pathParam2?: number,
  ): any {
    const data = { pathParam1, pathParam2 };
    const data2 = { data };
    return { query, data: { pathParam1, pathParam2, data2 } };
  }
}
