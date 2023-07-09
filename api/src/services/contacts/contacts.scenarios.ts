import type { Prisma, Contact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        updatedAt: '2023-07-08T23:55:42.595Z',
        contactType: 'String',
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        address: 'String',
        contactNumber: 'String',
        message: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-07-08T23:55:42.595Z',
        contactType: 'String',
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        address: 'String',
        contactNumber: 'String',
        message: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
