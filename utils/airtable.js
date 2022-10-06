const AirtablePlus = require('airtable-plus')

export const metaAirtable = new AirtablePlus({
  baseID: process.env.NEXT_PUBLIC_BASEID,
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE,
  tableName: 'Meta',
})