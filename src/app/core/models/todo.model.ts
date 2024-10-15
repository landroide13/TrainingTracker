export interface Todo{
    title: String,
    status: boolean
}

export class Workout {
  constructor(
    public id: string,
    public date: string,
    public exercises: Exercise[]
  ) {}
}

export class Exercise {
    constructor(
      public id?: string,
      public exname?: string,
      public sets?: number,
      public reps?: number,
      public weights?: number[]
  ) {}
}

export class Set{
  constructor(
    public reps: number,
    public weights: number
  ){}
}

// export interface Exercise {
//     id?: string,
//     exname?: string,
//     sets?: number,
//     reps?: number,
//     weights?: number[]
// }




