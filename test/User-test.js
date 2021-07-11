import { expect } from 'chai';
import User from '../src/User';


describe.only('User', () => {
  let userData, hydration, sleep, activity, user, user1, user2;
  beforeEach(() => {

    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      }];

    hydration = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    }];

    sleep = [{
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    }];

    activity = [{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    }];

    user = new User(userData);
    user1 = new User(userData[0]);
    user2 = new User(userData[1]);
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user).to.be.instanceof(User);
  });

  it('Should have an id', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
  });

  it('Should have user/s name', () => {
    expect(user1.name).to.equal('Luisa Hane');
    expect(user2.name).to.equal('Jarvis Considine');
  });

  it('Should have user/s adress', () => {
    expect(user2.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
    expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  });

  it('Should have user/s email', () => {
    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com');
    expect(user2.email).to.equal('Dimitri.Bechtelar11@gmail.com');
  });
});
