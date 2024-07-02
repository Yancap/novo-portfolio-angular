import { Injectable } from '@angular/core';
import * as Prismic from '@prismicio/client'

@Injectable({
  providedIn: 'platform',
})
export class PrismicService {
  public prismic = Prismic.createClient(
    'https://novo-portfolio.cdn.prismic.io/api/v2',
    {
      accessToken:
        'MC5abm0wQVJFQUFDQUEwd3JZ.77-9ce-_vV5t77-9VyVH77-9Xe-_ve-_vRvvv73vv73vv71WbO-_ve-_vRNMFO-_ve-_vXYGA1Pvv73vv70',
    }
  );
  constructor() {}
}
