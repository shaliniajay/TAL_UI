
export class OccupationFactor {
    OccupationFactorID !: number;
    Name!: string;
    Factor!: number;
  }

  export class Occupation {
    OccupationID! : number;
    Name!: string;
    OccupationFactorID!: number;
  }