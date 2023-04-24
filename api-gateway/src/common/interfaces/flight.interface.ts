import { IPassenger } from './passenger.interface';

export class IFlight {
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
}
