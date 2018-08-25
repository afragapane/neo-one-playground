// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const icoABI: ABI = {
  events: [
    {
      name: 'transfer',
      parameters: [
        {
          name: 'from',
          optional: true,
          type: 'Address',
        },
        {
          name: 'to',
          optional: true,
          type: 'Address',
        },
        {
          decimals: 8,
          name: 'amount',
          optional: false,
          type: 'Integer',
        },
      ],
    },
    {
      name: 'refund',
      parameters: [],
    },
  ],
  functions: [
    {
      constant: true,
      name: 'name',
      returnType: {
        optional: false,
        type: 'String',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'symbol',
      returnType: {
        optional: false,
        type: 'String',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'decimals',
      returnType: {
        decimals: 0,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'amountPerNEO',
      returnType: {
        decimals: 0,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'owner',
      returnType: {
        optional: false,
        type: 'Address',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'startTimeSeconds',
      returnType: {
        decimals: 0,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'icoDurationSeconds',
      returnType: {
        decimals: 0,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'totalSupply',
      returnType: {
        decimals: 8,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'balanceOf',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
      ],
      returnType: {
        decimals: 8,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: false,
      name: 'transfer',
      parameters: [
        {
          name: 'from',
          optional: false,
          type: 'Address',
        },
        {
          name: 'to',
          optional: false,
          type: 'Address',
        },
        {
          decimals: 8,
          name: 'amount',
          optional: false,
          type: 'Integer',
        },
      ],
      returnType: {
        optional: false,
        type: 'Boolean',
      },
      verify: false,
    },
    {
      constant: true,
      name: 'remaining',
      returnType: {
        decimals: 8,
        optional: false,
        type: 'Integer',
      },
      verify: false,
    },
    {
      constant: false,
      name: 'mintTokens',
      parameters: [],
      returnType: {
        optional: false,
        type: 'Boolean',
      },
      verify: true,
    },
    {
      constant: false,
      name: 'deploy',
      parameters: [
        {
          default: {
            type: 'sender',
          },
          name: 'owner',
          optional: true,
          type: 'Address',
        },
        {
          decimals: 0,
          name: 'startTimeSeconds',
          optional: true,
          type: 'Integer',
        },
        {
          decimals: 0,
          name: 'icoDurationSeconds',
          optional: true,
          type: 'Integer',
        },
      ],
      returnType: {
        type: 'Boolean',
      },
      verify: false,
    },
  ],
};
