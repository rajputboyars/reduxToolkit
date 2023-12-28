import Chance from 'chance'

const chance = Chance()

export const FakeData = () => {
  return (
    chance.name({middle:true})
  )
}

// export default FakeData