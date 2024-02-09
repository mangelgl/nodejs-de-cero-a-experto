
interface Hero {
    id: number
    name: string
    owner: string
}

export const heroes:Hero[] = [
    {
        id: 1,
        name: 'Iron Man',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    }
]