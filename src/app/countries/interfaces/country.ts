export interface Country {
   name:         Name;
   tld?:         string[];
   cca2:         string;
   ccn3?:        string;
   cca3:         string;
   cioc?:        string;
   independent?: boolean;
   status:       Status;
   unMember:     boolean;
   currencies?:  Currencies;
   idd:          Idd;
   capital?:     string[];
   altSpellings: string[];
   region:       Region;
   subregion?:   string;
   languages?:   { [key: string]: string };
   translations: { [key: string]: Translation };
   latlng:       number[];
   landlocked:   boolean;
   borders?:     string[];
   area:         number;
   demonyms?:    Demonyms;
   flag:         string;
   maps:         Maps;
   population:   number;
   gini?:        { [key: string]: number };
   fifa?:        string;
   car:          Car;
   timezones:    string[];
   continents:   Continent[];
   flags:        Flags;
   coatOfArms:   CoatOfArms;
   startOfWeek:  StartOfWeek;
   capitalInfo:  CapitalInfo;
   postalCode?:  PostalCode;
}

export interface CapitalInfo {
   latlng?: number[];
}

export interface Car {
   signs?: string[];
   side:   Side;
}

export enum Side {
   Left = "left",
   Right = "right",
}

export interface CoatOfArms {
   png?: string;
   svg?: string;
}

export enum Continent {
   Africa = "Africa",
   Antarctica = "Antarctica",
   Asia = "Asia",
   Europe = "Europe",
   NorthAmerica = "North America",
   Oceania = "Oceania",
   SouthAmerica = "South America",
}

export interface Currencies {
   AOA?: Aed;
   AUD?: Aed;
   KID?: Aed;
   GBP?: Aed;
   GGP?: Aed;
   EUR?: Aed;
   KMF?: Aed;
   USD?: Aed;
   KYD?: Aed;
   ILS?: Aed;
   XOF?: Aed;
   SSP?: Aed;
   NZD?: Aed;
   EGP?: Aed;
   JOD?: Aed;
   LRD?: Aed;
   SBD?: Aed;
   UZS?: Aed;
   ZWL?: Aed;
   XAF?: Aed;
   AED?: Aed;
   ZMW?: Aed;
   KHR?: Aed;
   VND?: Aed;
   XPF?: Aed;
   ZAR?: Aed;
   GYD?: Aed;
   MZN?: Aed;
   TMT?: Aed;
   LAK?: Aed;
   HUF?: Aed;
   ARS?: Aed;
   TRY?: Aed;
   HTG?: Aed;
   SYP?: Aed;
   SEK?: Aed;
   BZD?: Aed;
   CLP?: Aed;
   RSD?: Aed;
   DZD?: Aed;
   BOB?: Aed;
   JEP?: Aed;
   CKD?: Aed;
   VUV?: Aed;
   NAD?: Aed;
   YER?: Aed;
   MOP?: Aed;
   MUR?: Aed;
   AWG?: Aed;
   KGS?: Aed;
   GTQ?: Aed;
   TOP?: Aed;
   GNF?: Aed;
   TTD?: Aed;
   JMD?: Aed;
   BSD?: Aed;
   RUB?: Aed;
   LSL?: Aed;
   MMK?: Aed;
   BTN?: Aed;
   INR?: Aed;
   MRU?: Aed;
   CNY?: Aed;
   PYG?: Aed;
   DKK?: Aed;
   FOK?: Aed;
   NOK?: Aed;
   GHS?: Aed;
   MWK?: Aed;
   PGK?: Aed;
   SZL?: Aed;
   CAD?: Aed;
   SHP?: Aed;
   MAD?: Aed;
   MNT?: Aed;
   ISK?: Aed;
   THB?: Aed;
   BGN?: Aed;
   NIO?: Aed;
   GIP?: Aed;
   XCD?: Aed;
   COP?: Aed;
   BRL?: Aed;
   NPR?: Aed;
   IMP?: Aed;
   KPW?: Aed;
   ANG?: Aed;
   SRD?: Aed;
   KWD?: Aed;
   SOS?: Aed;
   TVD?: Aed;
   CDF?: Aed;
   ALL?: Aed;
   HNL?: Aed;
   SDG?: BAM;
   HKD?: Aed;
   LKR?: Aed;
   BDT?: Aed;
   MGA?: Aed;
   BHD?: Aed;
   CHF?: Aed;
   MKD?: Aed;
   UAH?: Aed;
   ERN?: Aed;
   AZN?: Aed;
   SLL?: Aed;
   DJF?: Aed;
   UYU?: Aed;
   GMD?: Aed;
   MDL?: Aed;
   AFN?: Aed;
   BND?: Aed;
   SGD?: Aed;
   FJD?: Aed;
   MXN?: Aed;
   RWF?: Aed;
   BMD?: Aed;
   TWD?: Aed;
   JPY?: Aed;
   QAR?: Aed;
   BWP?: Aed;
   LBP?: Aed;
   LYD?: Aed;
   MYR?: Aed;
   CRC?: Aed;
   BAM?: BAM;
   BIF?: Aed;
   CVE?: Aed;
   OMR?: Aed;
   BYN?: Aed;
   BBD?: Aed;
   TZS?: Aed;
   WST?: Aed;
   ETB?: Aed;
   MVR?: Aed;
   SCR?: Aed;
   UGX?: Aed;
   FKP?: Aed;
   STN?: Aed;
   IQD?: Aed;
   PLN?: Aed;
   TJS?: Aed;
   KES?: Aed;
   KZT?: Aed;
   PAB?: Aed;
   NGN?: Aed;
   RON?: Aed;
   CZK?: Aed;
   AMD?: Aed;
   VES?: Aed;
   PHP?: Aed;
   PEN?: Aed;
   KRW?: Aed;
   DOP?: Aed;
   IRR?: Aed;
   CUC?: Aed;
   CUP?: Aed;
   SAR?: Aed;
   GEL?: Aed;
   PKR?: Aed;
   TND?: Aed;
   IDR?: Aed;
}

export interface Aed {
   name:   string;
   symbol: string;
}

export interface BAM {
   name: string;
}

export interface Demonyms {
   eng:  Eng;
   fra?: Eng;
}

export interface Eng {
   f: string;
   m: string;
}

export interface Flags {
   png:  string;
   svg:  string;
   alt?: string;
}

export interface Idd {
   root?:     string;
   suffixes?: string[];
}

export interface Maps {
   googleMaps:     string;
   openStreetMaps: string;
}

export interface Name {
   common:      string;
   official:    string;
   nativeName?: { [key: string]: Translation };
}

export interface Translation {
   official: string;
   common:   string;
}

export interface PostalCode {
   format: string;
   regex?: string;
}

export enum Region {
   Africa = "Africa",
   Americas = "Americas",
   Antarctic = "Antarctic",
   Asia = "Asia",
   Europe = "Europe",
   Oceania = "Oceania",
}

export enum StartOfWeek {
   Monday = "monday",
   Saturday = "saturday",
   Sunday = "sunday",
}

export enum Status {
   OfficiallyAssigned = "officially-assigned",
   UserAssigned = "user-assigned",
}
