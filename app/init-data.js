var mongoose = require('mongoose');
var db = require('./models/config');
var Graph = require('./models/graph-schema');
console.log('in init');
// Initialize the database with static data for basic graphs

var init = function () {
  // console.log('db:',db)
  var MAlabama = new Graph({
    location: 'Alabama',
    income: 34804,
    gender: 'Male'
  });
  MAlabama.save(function (err) {
    if(err) return console.error(err);
  });
  var MAlaska = new Graph({
    location: 'Alaska',
    income: 41430,
    gender: 'Male'
  });
  MAlaska.save(function (err) {
    if(err) return console.error(err);
  });
  var MArizona = new Graph({
    location: 'Arizona',
    income: 32726,
    gender: 'Male'
  });
  MArizona.save(function (err) {
    if(err) return console.error(err);
  });
  var MArkansas = new Graph({
    location: 'Arkansas',
    income: 31104,
    gender: 'Male'
  });
  MArkansas.save(function (err) {
    if(err) return console.error(err);
  });
  var MCalifornia = new Graph({
    location: 'California',
    income: 36556,
    gender: 'Male'
  });
  MCalifornia.save(function (err) {
    if(err) return console.error(err);
  });
  var MColorado = new Graph({
    location: 'Colorado',
    income: 40816,
    gender: 'Male'
  });
  MColorado.save(function (err) {
    if(err) return console.error(err);
  });
  var MConnecticut = new Graph({
    location: 'Connecticut',
    income: 46435,
    gender: 'Male'
  });
  MConnecticut.save(function (err) {
    if(err) return console.error(err);
  });
  var MDelaware = new Graph({
    location: 'Delaware',
    income: 40025,
    gender: 'Male'
  });
  MDelaware.save(function (err) {
    if(err) return console.error(err);
  });
  var MDistrictC = new Graph({
    location: 'DC',
    income: 52337,
    gender: 'Male'
  });
  MDistrictC.save(function (err) {
    if(err) return console.error(err);
  });
  var MFlorida = new Graph({
    location: 'Florida',
    income: 31441,
    gender: 'Male'
  });
  MFlorida.save(function (err) {
    if(err) return console.error(err);
  });
  var MGeorgia = new Graph({
    location: 'Georgia',
    income: 35154,
    gender: 'Male'
  });
  MGeorgia.save(function (err) {
    if(err) return console.error(err);
  });
  var MHawaii = new Graph({
    location: 'Hawaii',
    income: 38276,
    gender: 'Male'
  });
  MHawaii.save(function (err) {
    if(err) return console.error(err);
  });
  var MIdaho = new Graph({
    location: 'Idaho',
    income: 32036,
    gender: 'Male'
  });
  MIdaho.save(function (err) {
    if(err) return console.error(err);
  });
  var MIllinois = new Graph({
    location: 'Illinois',
    income: 40856,
    gender: 'Male'
  });
  MIllinois.save(function (err) {
    if(err) return console.error(err);
  });
  var MIndiana = new Graph({
    location: 'Indiana',
    income: 36454,
    gender: 'Male'
  });
  MIndiana.save(function (err) {
    if(err) return console.error(err);
  });
  var MIowa = new Graph({
    location: 'Iowa',
    income: 37901,
    gender: 'Male'
  });
  MIowa.save(function (err) {
    if(err) return console.error(err);
  });
  var MKansas = new Graph({
    location: 'Kansas',
    income: 37240,
    gender: 'Male'
  });
  MKansas.save(function (err) {
    if(err) return console.error(err);
  });
  var MKentucky = new Graph({
    location: 'Kentucky',
    income: 32295,
    gender: 'Male'
  });
  MKentucky.save(function (err) {
    if(err) return console.error(err);
  });
  var MLouisiana = new Graph({
    location: 'Louisiana',
    income: 37630,
    gender: 'Male'
  });
  MLouisiana.save(function (err) {
    if(err) return console.error(err);
  });
  var MMaine = new Graph({
    location: 'Maine',
    income: 34492,
    gender: 'Male'
  });
  MMaine.save(function (err) {
    if(err) return console.error(err);
  });
  var MMaryland = new Graph({
    location: 'Maryland',
    income: 46509,
    gender: 'Male'
  });
  MMaryland.save(function (err) {
    if(err) return console.error(err);
  });
  var MMassachusetts = new Graph({
    location: 'Massachusetts',
    income: 45792,
    gender: 'Male'
  });
  MMassachusetts.save(function (err) {
    if(err) return console.error(err);
  });
  var MMichigan = new Graph({
    location: 'Michigan',
    income: 36390,
    gender: 'Male'
  });
  MMichigan.save(function (err) {
    if(err) return console.error(err);
  });
  var MMinnesota = new Graph({
    location: 'Minnesota',
    income: 40930,
    gender: 'Male'
  });
  MMinnesota.save(function (err) {
    if(err) return console.error(err);
  });
  var MMississippi = new Graph({
    location: 'Mississippi',
    income: 31700,
    gender: 'Male'
  });
  MMississippi.save(function (err) {
    if(err) return console.error(err);
  });
  var MMissouri = new Graph({
    location: 'Missouri',
    income: 35628,
    gender: 'Male'
  });
  MMissouri.save(function (err) {
    if(err) return console.error(err);
  });
  var MMontana = new Graph({
    location: 'Montana',
    income: 32489,
    gender: 'Male'
  });
  MMontana.save(function (err) {
    if(err) return console.error(err);
  });
  var MNebraska = new Graph({
    location: 'Nebraska',
    income: 36817,
    gender: 'Male'
  });
  MNebraska.save(function (err) {
    if(err) return console.error(err);
  });
  var MNevada = new Graph({
    location: 'Nevada',
    income: 33560,
    gender: 'Male'
  });
  MNevada.save(function (err) {
    if(err) return console.error(err);
  });
  var MNewHampshire = new Graph({
    location: 'New Hampshire',
    income: 42344,
    gender: 'Male'
  });
  MNewHampshire.save(function (err) {
    if(err) return console.error(err);
  });
  var MNewJersey = new Graph({
    location: 'New Jersey',
    income: 46574,
    gender: 'Male'
  });
  MNewJersey.save(function (err) {
    if(err) return console.error(err);
  });
  var MNewMexico = new Graph({
    location: 'New Mexico',
    income: 30564,
    gender: 'Male'
  });
  MNewMexico.save(function (err) {
    if(err) return console.error(err);
  });
  var MNewYork = new Graph({
    location: 'New York',
    income: 40570,
    gender: 'Male'
  });
  MNewYork.save(function (err) {
    if(err) return console.error(err);
  });
  var MNorthCarolina = new Graph({
    location: 'North Carolina',
    income: 32379,
    gender: 'Male'
  });
  MNorthCarolina.save(function (err) {
    if(err) return console.error(err);
  });
  var MNorthDakota = new Graph({
    location: 'North Dakota',
    income: 42186,
    gender: 'Male'
  });
  MNorthDakota.save(function (err) {
    if(err) return console.error(err);
  });
  var MOhio = new Graph({
    location: 'Ohio',
    income: 36958,
    gender: 'Male'
  });
  MOhio.save(function (err) {
    if(err) return console.error(err);
  });
  var MOklahoma = new Graph({
    location: 'Oklahoma',
    income: 35488,
    gender: 'Male'
  });
  MOklahoma.save(function (err) {
    if(err) return console.error(err);
  });
  var MOregon = new Graph({
    location: 'Oregon',
    income: 34277,
    gender: 'Male'
  });
  MOregon.save(function (err) {
    if(err) return console.error(err);
  });
  var MPennsylvania = new Graph({
    location: 'Pennsylvania',
    income: 39778,
    gender: 'Male'
  });
  MPennsylvania.save(function (err) {
    if(err) return console.error(err);
  });
  var MRhodeIsland = new Graph({
    location: 'Rhode Island',
    income: 40264,
    gender: 'Male'
  });
  MRhodeIsland.save(function (err) {
    if(err) return console.error(err);
  });
  var MSouthCarolina = new Graph({
    location: 'South Carolina',
    income: 31974,
    gender: 'Male'
  });
  MSouthCarolina.save(function (err) {
    if(err) return console.error(err);
  });
  var MSouthDakota = new Graph({
    location: 'South Dakota',
    income: 35574,
    gender: 'Male'
  });
  MSouthDakota.save(function (err) {
    if(err) return console.error(err);
  });
  var MTennessee = new Graph({
    location: 'Tennessee',
    income: 32734,
    gender: 'Male'
  });
  MTennessee.save(function (err) {
    if(err) return console.error(err);
  });
  var MTexas = new Graph({
    location: 'Texas',
    income: 36598,
    gender: 'Male'
  });
  MTexas.save(function (err) {
    if(err) return console.error(err);
  });
  var MUtah = new Graph({
    location: 'Utah',
    income: 36791,
    gender: 'Male'
  });
  MUtah.save(function (err) {
    if(err) return console.error(err);
  });
  var MVermont = new Graph({
    location: 'Vermont',
    income: 35502,
    gender: 'Male'
  });
  MVermont.save(function (err) {
    if(err) return console.error(err);
  });
  var MVirginia = new Graph({
    location: 'Virginia',
    income: 41421,
    gender: 'Male'
  });
  MVirginia.save(function (err) {
    if(err) return console.error(err);
  });
  var MWashington = new Graph({
    location: 'Washington',
    income: 41859,
    gender: 'Male'
  });
  MWashington.save(function (err) {
    if(err) return console.error(err);
  });
  var MWestVirginia = new Graph({
    location: 'West Virginia',
    income: 33822,
    gender: 'Male'
  });
  MWestVirginia.save(function (err) {
    if(err) return console.error(err);
  });
  var MWisconsin = new Graph({
    location: 'Wisconsin',
    income: 37774,
    gender: 'Male'
  });
  MWisconsin.save(function (err) {
    if(err) return console.error(err);
  });
  var MWyoming = new Graph({
    location: 'Wyoming',
    income: 42376,
    gender: 'Male'
  });
  MWyoming.save(function (err) {
    if(err) return console.error(err);
  });
  var FAlabama = new Graph({
    location: 'Alabama',
    income: 22998,
    gender: 'Female'
  });
  FAlabama.save(function (err) {
    if(err) return console.error(err);
  });
  var FAlaska = new Graph({
    location: 'Alaska',
    income: 29648,
    gender: 'Female'
  });
  FAlaska.save(function (err) {
    if(err) return console.error(err);
  });
  var FArizona = new Graph({
    location: 'Arizona',
    income: 25860,
    gender: 'Female'
  });
  FArizona.save(function (err) {
    if(err) return console.error(err);
  });
  var ArkansasF = new Graph({
    location: 'Arkansas',
    income: 22642,
    gender: 'Female'
  });
  ArkansasF.save(function (err) {
    if(err) return console.error(err);
  });
  var CaliforniaF = new Graph({
    location: 'California',
    income: 27038,
    gender: 'Female'
  });
  CaliforniaF.save(function (err) {
    if(err) return console.error(err);
  });
  var ColoradoF = new Graph({
    location: 'Colorado',
    income: 28642,
    gender: 'Female'
  });
  ColoradoF.save(function (err) {
    if(err) return console.error(err);
  });
  var ConnecticutF = new Graph({
    location: 'Connecticut',
    income: 32701,
    gender: 'Female'
  });
  ConnecticutF.save(function (err) {
    if(err) return console.error(err);
  });
  var DistrictCF = new Graph({
    location: 'DC',
    income: 45201,
    gender: 'Female'
  });
  DistrictCF.save(function (err) {
    if(err) return console.error(err);
  });
  var DelawareF = new Graph({
    location: 'Delaware',
    income: 30711,
    gender: 'Female'
  });
  DelawareF.save(function (err) {
    if(err) return console.error(err);
  });
  var FloridaF = new Graph({
    location: 'Florida',
    income: 25328,
    gender: 'Female'
  });
  FloridaF.save(function (err) {
    if(err) return console.error(err);
  });
  var GeorgiaF = new Graph({
    location: 'Georgia',
    income: 25277,
    gender: 'Female'
  });
  GeorgiaF.save(function (err) {
    if(err) return console.error(err);
  });
  var HawaiiF = new Graph({
    location: 'Hawaii',
    income: 30911,
    gender: 'Female'
  });
  HawaiiF.save(function (err) {
    if(err) return console.error(err);
  });
  var IdahoF = new Graph({
    location: 'Idaho',
    income: 19349,
    gender: 'Female'
  });
  IdahoF.save(function (err) {
    if(err) return console.error(err);
  });
  var IllinoisF = new Graph({
    location: 'Illinois',
    income: 27501,
    gender: 'Female'
  });
  IllinoisF.save(function (err) {
    if(err) return console.error(err);
  });
  var IndianaF = new Graph({
    location: 'Indiana',
    income: 23449,
    gender: 'Female'
  });
  IndianaF.save(function (err) {
    if(err) return console.error(err);
  });
  var IowaF = new Graph({
    location: 'Iowa',
    income: 25007,
    gender: 'Female'
  });
  IowaF.save(function (err) {
    if(err) return console.error(err);
  });
  var KansasF = new Graph({
    location: 'Kansas',
    income: 24650,
    gender: 'Female'
  });
  KansasF.save(function (err) {
    if(err) return console.error(err);
  });
  var KentuckyF = new Graph({
    location: 'Kentucky',
    income: 23160,
    gender: 'Female'
  });
  KentuckyF.save(function (err) {
    if(err) return console.error(err);
  });
  var LouisianaF = new Graph({
    location: 'Louisiana',
    income: 23460,
    gender: 'Female'
  });
  LouisianaF.save(function (err) {
    if(err) return console.error(err);
  });
  var MaineF = new Graph({
    location: 'Maine',
    income: 25045,
    gender: 'Female'
  });
  MaineF.save(function (err) {
    if(err) return console.error(err);
  });
  var MarylandF = new Graph({
    location: 'Maryland',
    income: 35647,
    gender: 'Female'
  });
  MarylandF.save(function (err) {
    if(err) return console.error(err);
  });
  var MassachusettsF = new Graph({
    location: 'Massachusetts',
    income: 31845,
    gender: 'Female'
  });
  MassachusettsF.save(function (err) {
    if(err) return console.error(err);
  });
  var MichiganF = new Graph({
    location: 'Michigan',
    income: 22803,
    gender: 'Female'
  });
  MichiganF.save(function (err) {
    if(err) return console.error(err);
  });
  var MinnesotaF = new Graph({
    location: 'Minnesota',
    income: 29658,
    gender: 'Female'
  });
  MinnesotaF.save(function (err) {
    if(err) return console.error(err);
  });
  var MississippiF = new Graph({
    location: 'Mississippi',
    income: 22381,
    gender: 'Female'
  });
  MississippiF.save(function (err) {
    if(err) return console.error(err);
  });
  var MissouriF = new Graph({
    location: 'Missouri',
    income: 24872,
    gender: 'Female'
  });
  MissouriF.save(function (err) {
    if(err) return console.error(err);
  });
  var MontanaF = new Graph({
    location: 'Montana',
    income: 22262,
    gender: 'Female'
  });
  MontanaF.save(function (err) {
    if(err) return console.error(err);
  });
  var NebraskaF = new Graph({
    location: 'Nebraska',
    income: 25264,
    gender: 'Female'
  });
  NebraskaF.save(function (err) {
    if(err) return console.error(err);
  });
  var NevadaF = new Graph({
    location: 'Nevada',
    income: 26848,
    gender: 'Female'
  });
  NevadaF.save(function (err) {
    if(err) return console.error(err);
  });
  var NewHapmshireF = new Graph({
    location: 'New Hampshire',
    income: 30621,
    gender: 'Female'
  });
  NewHapmshireF.save(function (err) {
    if(err) return console.error(err);
  });
  var FNewJersey = new Graph({
    location: 'New Jersey',
    income: 31765,
    gender: 'Female'
  });
  FNewJersey.save(function (err) {
    if(err) return console.error(err);
  });
  var FNewMexico = new Graph({
    location: 'New Mexico',
    income: 21976,
    gender: 'Female'
  });
  FNewMexico.save(function (err) {
    if(err) return console.error(err);
  });
  var FNewYork = new Graph({
    location: 'New York',
    income: 30878,
    gender: 'Female'
  });
  FNewYork.save(function (err) {
    if(err) return console.error(err);
  });
  var FNorthCarolina = new Graph({
    location: 'North Carolina',
    income: 25123,
    gender: 'Female'
  });
  FNorthCarolina.save(function (err) {
    if(err) return console.error(err);
  });
  var FNorthDakota = new Graph({
    location: 'North Dakota',
    income: 26799,
    gender: 'Female'
  });
  FNorthDakota.save(function (err) {
    if(err) return console.error(err);
  });
  var OhioF = new Graph({
    location: 'Ohio',
    income: 24873,
    gender: 'Female'
  });
  OhioF.save(function (err) {
    if(err) return console.error(err);
  });
  var OklahomaF = new Graph({
    location: 'Oklahoma',
    income: 22889,
    gender: 'Female'
  });
  OklahomaF.save(function (err) {
    if(err) return console.error(err);
  });
  var OregonF = new Graph({
    location: 'Oregon',
    income: 24310,
    gender: 'Female'
  });
  OregonF.save(function (err) {
    if(err) return console.error(err);
  });
  var PennsylvaniaF = new Graph({
    location: 'Pennsylvania',
    income: 26505,
    gender: 'Female'
  });
  PennsylvaniaF.save(function (err) {
    if(err) return console.error(err);
  });
  var RhodeIslandF = new Graph({
    location: 'Rhode Island',
    income: 30200,
    gender: 'Female'
  });
  RhodeIslandF.save(function (err) {
    if(err) return console.error(err);
  });
  var FSouthCarolina = new Graph({
    location: 'South Carolina',
    income: 23796,
    gender: 'Female'
  });
  FSouthCarolina.save(function (err) {
    if(err) return console.error(err);
  });
  var FSouthDakota = new Graph({
    location: 'South Dakota',
    income: 25063,
    gender: 'Female'
  });
  FSouthDakota.save(function (err) {
    if(err) return console.error(err);
  });
  var TennesseeF = new Graph({
    location: 'Tennessee',
    income: 23982,
    gender: 'Female'
  });
  TennesseeF.save(function (err) {
    if(err) return console.error(err);
  });
  var TexasF = new Graph({
    location: 'Texas',
    income: 25264,
    gender: 'Female'
  });
  TexasF.save(function (err) {
    if(err) return console.error(err);
  });
  var UtahF = new Graph({
    location: 'Utah',
    income: 21143,
    gender: 'Female'
  });
  UtahF.save(function (err) {
    if(err) return console.error(err);
  });
  var VermontF = new Graph({
    location: 'Vermont',
    income: 26541,
    gender: 'Female'
  });
  VermontF.save(function (err) {
    if(err) return console.error(err);
  });
  var VirginiaF = new Graph({
    location: 'Virginia',
    income: 30119,
    gender: 'Female'
  });
  VirginiaF.save(function (err) {
    if(err) return console.error(err);
  });
  var WashingtonF = new Graph({
    location: 'Washington',
    income: 28451,
    gender: 'Female'
  });
  WashingtonF.save(function (err) {
    if(err) return console.error(err);
  });
  var WestVirginiaF = new Graph({
    location: 'West Virginia',
    income: 22951,
    gender: 'Female'
  });
  WestVirginiaF.save(function (err) {
    if(err) return console.error(err);
  });
  var WisconsinF = new Graph({
    location: 'Wisconsin',
    income: 26173,
    gender: 'Female'
  });
  WisconsinF.save(function (err) {
    if(err) return console.error(err);
  });
  var WyomingF = new Graph({
    location: 'Wyoming',
    income: 22526,
    gender: 'Female'
  });
  WyomingF.save(function (err) {
    if(err) return console.error(err);
  });

  //income by gender and race
  var WhiteM = new Graph({
    income: 51388,
    gender: 'Male',
    race: 'White'
  });
  WhiteM.save(function (err) {
    if(err) return console.error(err);
  });
  var whiteF = new Graph({
    income: 40905,
    gender: 'Female',
    race: 'White'
  });
  whiteF.save(function (err) {
    if(err) return console.error(err);
  });
  var BlackM = new Graph({
    income: 38243,
    gender: 'Male',
    race: 'African-Armerican/Black'
  });
  BlackM.save(function (err) {
    if(err) return console.error(err);
  });
  var BlackF = new Graph({
    income: 34426,
    gender: 'Female',
    race: 'African-Armerican/Black'
  });
  BlackF.save(function (err) {
    if(err) return console.error(err);
  });
  var NativeM = new Graph({
    income: 36465,
    gender: 'Male',
    race: 'American-Indian/Alaska-Native'
  });
  NativeM.save(function (err) {
    if(err) return console.error(err);
  });
  var NativeF = new Graph({
    income: 31810,
    gender: 'Female',
    race: 'American-Indian/Alaska-Native'
  });
  NativeF.save(function (err) {
    if(err) return console.error(err);
  });
  var AsianM = new Graph({
    income: 60897,
    gender: 'Male',
    race: 'Asian'
  });
  AsianM.save(function (err) {
    if(err) return console.error(err);
  });
  var AsianF = new Graph({
    income: 49628,
    gender: 'Female',
    race: 'Asian'
  });
  AsianF.save(function (err) {
    if(err) return console.error(err);
  });
  var IslanderM = new Graph({
    income: 39510,
    gender: 'Male',
    race: 'Native-Hawaiian/Pacific-Islander'
  });
  IslanderM.save(function (err) {
    if(err) return console.error(err);
  });
  var IslanderF = new Graph({
    income: 33091,
    gender: 'Female',
    race: 'Native-Hawaiian/Pacific-Islander'
  });
  IslanderF.save(function (err) {
    if(err) return console.error(err);
  });
  var OtherM = new Graph({
    income: 31567,
    gender: 'Male',
    race: 'Other'
  });
  OtherM.save(function (err) {
    if(err) return console.error(err);
  });
  var OtherF = new Graph({
    income: 27129,
    gender: 'Female',
    race: 'Other'
  });
  OtherF.save(function (err) {
    if(err) return console.error(err);
  });
  // income by gender/occupation
  var ManageM = new Graph({
    income: 80809,
    gender: 'Male',
    occupation: 'Management occupations'
  });
  ManageM.save(function (err) {
    if(err) return console.error(err);
  });
  var ManageF = new Graph({
    income: 61138,
    gender: 'Female',
    occupation: 'Management occupations'
  });
  ManageF.save(function (err) {
    if(err) return console.error(err);
  });
  var BizM = new Graph({
    income: 71816,
    gender: 'Male',
    occupation: 'Business and financial operations occupations'
  });
  BizM.save(function (err) {
    if(err) return console.error(err);
  });
  var BizF = new Graph({
    income: 55043,
    gender: 'Female',
    occupation: 'Business and financial operations occupations'
  });
  BizF.save(function (err) {
    if(err) return console.error(err);
  });
  var CompM = new Graph({
    income: 82130,
    gender: 'Male',
    occupation: 'Computer and mathematical occupations'
  });
  CompM.save(function (err) {
    if(err) return console.error(err);
  });
  var CompF = new Graph({
    income: 71378,
    gender: 'Female',
    occupation: 'Computer and mathematical occupations'
  });
  CompF.save(function (err) {
    if(err) return console.error(err);
  });
  var ArchM = new Graph({
    income: 81198,
    gender: 'Male',
    occupation: 'Architecture and engineering occupations'
  });
  ArchM.save(function (err) {
    if(err) return console.error(err);
  });
  var ArchF = new Graph({
    income: 70435,
    gender: 'Female',
    occupation: 'Architecture and engineering occupations'
  });
  ArchF.save(function (err) {
    if(err) return console.error(err);
  });
  var SciM = new Graph({
    income: 70726,
    gender: 'Male',
    occupation: 'Life, physical, and social science occupations'
  });
  SciM.save(function (err) {
    if(err) return console.error(err);
  });
  var SciF = new Graph({
    income: 59905,
    gender: 'Female',
    occupation: 'Life, physical, and social science occupations'
  });
  SciF.save(function (err) {
    if(err) return console.error(err);
  });
  var SocM = new Graph({
    income: 45658,
    gender: 'Male',
    occupation: 'Community and social services occupations'
  });
  SocM.save(function (err) {
    if(err) return console.error(err);
  });
  var SocF = new Graph({
    income: 41893,
    gender: 'Female',
    occupation: 'Community and social services occupations'
  });
  SocF.save(function (err) {
    if(err) return console.error(err);
  });
  var LawM = new Graph({
    income: 120270,
    gender: 'Male',
    occupation: 'Legal occupations'
  });
  LawM.save(function (err) {
    if(err) return console.error(err);
  });
  var LawF = new Graph({
    income: 64121,
    gender: 'Female',
    occupation: 'Legal occupations'
  });
  LawF.save(function (err) {
    if(err) return console.error(err);
  });
  var EdM = new Graph({
    income: 55772,
    gender: 'Male',
    occupation: 'Education, training, and library occupations'
  });
  EdM.save(function (err) {
    if(err) return console.error(err);
  });
  var EdF = new Graph({
    income: 45789,
    gender: 'Female',
    occupation: 'Education, training, and library occupations'
  });
  EdF.save(function (err) {
    if(err) return console.error(err);
  });
  var ArtM = new Graph({
    income: 55746,
    gender: 'Male',
    occupation: 'Arts, design, entertainment, sports, and media occupations'
  });
  ArtM.save(function (err) {
    if(err) return console.error(err);
  });
  var ArtF = new Graph({
    income: 47131,
    gender: 'Female',
    occupation: 'Arts, design, entertainment, sports, and media occupations'
  });
  ArtF.save(function (err) {
    if(err) return console.error(err);
  });
  var HealthM = new Graph({
    income: 80084,
    gender: 'Male',
    occupation: 'Healthcare practitioner and technical occupations'
  });
  HealthM.save(function (err) {
    if(err) return console.error(err);
  });
  var HealthF = new Graph({
    income: 56629,
    gender: 'Female',
    occupation: 'Healthcare practitioner and technical occupations'
  });
  HealthF.save(function (err) {
    if(err) return console.error(err);
  });
  var HealthSupM = new Graph({
    income: 30921,
    gender: 'Male',
    occupation: 'Healthcare support occupations'
  });
  HealthSupM.save(function (err) {
    if(err) return console.error(err);
  });
  var HealthSupF = new Graph({
    income: 27170,
    gender: 'Female',
    occupation: 'Healthcare support occupations'
  });
  HealthSupF.save(function (err) {
    if(err) return console.error(err);
  });
  var ProtM = new Graph({
    income: 52118,
    gender: 'Male',
    occupation: 'Protective service occupations'
  });
  ProtM.save(function (err) {
    if(err) return console.error(err);
  });
  var ProtF = new Graph({
    income: 40787,
    gender: 'Female',
    occupation: 'Protective service occupations'
  });
  ProtF.save(function (err) {
    if(err) return console.error(err);
  });
  var FoodM = new Graph({
    income: 23729,
    gender: 'Male',
    occupation: 'Food preparation and serving related occupations'
  });
  FoodM.save(function (err) {
    if(err) return console.error(err);
  });
  var FoodF = new Graph({
    income: 20620,
    gender: 'Female',
    occupation: 'Food preparation and serving related occupations'
  });
  FoodF.save(function (err) {
    if(err) return console.error(err);
  });
  var CleanM = new Graph({
    income: 28980,
    gender: 'Male',
    occupation: 'Building and ground cleaning and maintenance occupations'
  });
  CleanM.save(function (err) {
    if(err) return console.error(err);
  });
  var CleanF = new Graph({
    income: 21421,
    gender: 'Female',
    occupation: 'Building and ground cleaning and maintenance occupations'
  });
  CleanF.save(function (err) {
    if(err) return console.error(err);
  });
  var CareM = new Graph({
    income: 29220,
    gender: 'Male',
    occupation: 'Personal care and service occupations'
  });
  CareM.save(function (err) {
    if(err) return console.error(err);
  });
  var CareF = new Graph({
    income: 22718,
    gender: 'Female',
    occupation: 'Personal care and service occupations'
  });
  CareF.save(function (err) {
    if(err) return console.error(err);
  });
  var SalesM = new Graph({
    income: 50928,
    gender: 'Male',
    occupation: 'Sales and related occupations'
  });
  SalesM.save(function (err) {
    if(err) return console.error(err);
  });
  var SalesF = new Graph({
    income: 32588,
    gender: 'Female',
    occupation: 'Sales and related occupations'
  });
  SalesF.save(function (err) {
    if(err) return console.error(err);
  });
  var AdminM = new Graph({
    income: 39077,
    gender: 'Male',
    occupation: 'Office and administrative support occupations'
  });
  AdminM.save(function (err) {
    if(err) return console.error(err);
  });
  var AdminF = new Graph({
    income: 34962,
    gender: 'Female',
    occupation: 'Office and administrative support occupations'
  });
  AdminF.save(function (err) {
    if(err) return console.error(err);
  });
  var FarmM = new Graph({
    income: 26962,
    gender: 'Male',
    occupation: 'Farming, fishing, and forestry occupations'
  });
  FarmM.save(function (err) {
    if(err) return console.error(err);
  });
  var FarmF = new Graph({
    income: 20606,
    gender: 'Female',
    occupation: 'Farming, fishing, and forestry occupations'
  });
  FarmF.save(function (err) {
    if(err) return console.error(err);
  });
  var BuildM = new Graph({
    income: 40300,
    gender: 'Male',
    occupation: 'Construction and extraction occupations'
  });
  BuildM.save(function (err) {
    if(err) return console.error(err);
  });
  var BuildF = new Graph({
    income: 35673,
    gender: 'Female',
    occupation: 'Construction and extraction occupations'
  });
  BuildF.save(function (err) {
    if(err) return console.error(err);
  });
  var RepairM = new Graph({
    income: 45515,
    gender: 'Male',
    occupation: 'Installation, maintenance, and repair occupations'
  });
  RepairM.save(function (err) {
    if(err) return console.error(err);
  });
  var RepairF = new Graph({
    income: 41070,
    gender: 'Female',
    occupation: 'Installation, maintenance, and repair occupations'
  });
  RepairF.save(function (err) {
    if(err) return console.error(err);
  });
  var ProdM = new Graph({
    income: 40435,
    gender: 'Male',
    occupation: 'Production occupations'
  });
  ProdM.save(function (err) {
    if(err) return console.error(err);
  });
  var ProdF = new Graph({
    income: 27256,
    gender: 'Female',
    occupation: 'Production occupations'
  });
  ProdF.save(function (err) {
    if(err) return console.error(err);
  });
  var TransM = new Graph({
    income: 42204,
    gender: 'Male',
    occupation: 'Transportation occupations'
  });
  TransM.save(function (err) {
    if(err) return console.error(err);
  });
  var TransF = new Graph({
    income: 31533,
    gender: 'Female',
    occupation: 'Transportation occupations'
  });
  TransF.save(function (err) {
    if(err) return console.error(err);
  });
  var MoveM = new Graph({
    income: 31092,
    gender: 'Male',
    occupation: 'Material moving occupations'
  });
  MoveM.save(function (err) {
    if(err) return console.error(err);
  });
  var MoveF = new Graph({
    income: 24835,
    gender: 'Female',
    occupation: 'Material moving occupations'
  });
  MoveF.save(function (err) {
    if(err) return console.error(err);
  });
  console.log('Done init');
}

module.exports = init;
