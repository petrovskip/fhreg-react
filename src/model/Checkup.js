export class Checkup{
    constructor(
        checkupid,
        datecreated,
        profile,
        history,
        risk,
        therapy,
        score
    ){
       this.checkupid = checkupid;
       this.datecreated = datecreated; 
       this.profile = profile;
       this.history = history;
       this.risk = risk;
       this.therapy = therapy;
       this.score = score; 
    }
}

export class Profile{
    constructor(
        name,
        surname,
        birthdate,
        gender,
        nationality,
        height,
        weight,
        bmi,
        bsa
    )
    {
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.gender = gender;
        this.nationality = nationality;
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
        this.bsa = bsa;        
    }
}

export class History{
    constructor(
        coronaryDisease,
        periferalVascularDisease,
        aortictStent,
        tyroidDysorder,
        hobb,
        activeMalignantDisease
    )
    {
        this.coronaryDisease = coronaryDisease,
        this.periferalVascularDisease = periferalVascularDisease;
        this.aortictStent = aortictStent;
        this.tyroidDysorder = tyroidDysorder;
        this.hobb = hobb;
        this.activeMalignantDisease = activeMalignantDisease;
    }
}

export class Risk{
    constructor(
        alchocolUse,
        tobaccoUse,
        diabetesType,
        overweightStatus,
        methabolicSyndrom,
        EUROSCORE
    )
    {
        this.alchocolUse = alchocolUse;
        this.tobaccoUse = tobaccoUse;
        this.diabetesType = diabetesType;
        this.overweightStatus = overweightStatus;
        this.methabolicSyndrom = methabolicSyndrom;
        this.EUROSCORE = EUROSCORE;
    }
    
}

export class Therapy{
    constructor(
        statinType,
        statinDose,
        fibratType,
        fibratDose,
        betaBlocatorType,
        betaBlocatorDose,
        antibioticType,
        antibioticDose,
        imunosupressiveType,
        imunosupressiveDose 
    ){
        this.statinType = statinType;
        this.statinDose = statinDose;
        this.fibratType = fibratType;
        this.fibratDose = fibratDose;
        this.betaBlocatorType = betaBlocatorType;
        this.betaBlocatorDose = betaBlocatorDose;
        this.antibioticType = antibioticType;
        this.antibioticDose = antibioticDose;
        this.imunosupressiveType = imunosupressiveType;
        this.imunosupressiveDose = imunosupressiveDose;
    }
}

export class Score{
    constructor(
        knownWound,
        ldlAdults,
        periferyDesiese,
        coronaryDisease,
        cornealBow,
        total
    )
    {
        this.knownWound = knownWound;
        this.ldlAdults = ldlAdults;
        this.periferyDesiese = periferyDesiese;
        this.coronaryDisease = coronaryDisease;
        this.cornealBow = cornealBow;
        this.total = total;
    }
}