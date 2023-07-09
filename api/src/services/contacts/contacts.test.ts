import type { Contact } from '@prisma/client'

import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'
import type { StandardScenario } from './contacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contacts', () => {
  scenario('returns all contacts', async (scenario: StandardScenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario: StandardScenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async () => {
    const result = await createContact({
      input: {
        updatedAt: '2023-07-08T23:55:42.539Z',
        contactType: 'String',
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        address: 'String',
        contactNumber: 'String',
        message: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-07-08T23:55:42.539Z'))
    expect(result.contactType).toEqual('String')
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.address).toEqual('String')
    expect(result.contactNumber).toEqual('String')
    expect(result.message).toEqual('String')
  })

  scenario('updates a contact', async (scenario: StandardScenario) => {
    const original = (await contact({ id: scenario.contact.one.id })) as Contact
    const result = await updateContact({
      id: original.id,
      input: { updatedAt: '2023-07-09T23:55:42.539Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-07-09T23:55:42.539Z'))
  })

  scenario('deletes a contact', async (scenario: StandardScenario) => {
    const original = (await deleteContact({
      id: scenario.contact.one.id,
    })) as Contact
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
