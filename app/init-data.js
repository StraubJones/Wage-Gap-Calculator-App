var mongoose = require('mongoose');
var db = require('./models/config');
var Graph = require('./models/graph-schema');
console.log('in init');
// Initialize the database with static data for basic graphs

var Alabama = new Graph({
  location: 'Alabama',
  income: 34804,
  gender: 'Male'
});

Alabama.save(function (err) {
  if(err) return console.error(err);
  console.log('Alabama OK!');
});

/*var init = function () {
  // console.log('db:',db)
  Graph.insert({
    location: 'Alabama',
    income: 34804,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Alaska',
    income: 41430,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Arizona',
    income: 32726,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Arkansas',
    income: 31104,
    gender: 'Male'
  })
  Graph.insert({
    location: 'California',
    income: 36556,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Colorado',
    income: 40816,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Connecticut',
    income: 46435,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Delaware',
    income: 40025,
    gender: 'Male'
  })
  Graph.insert({
    location: 'DC',
    income: 52337,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Florida',
    income: 31441,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Georgia',
    income: 35154,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Hawaii',
    income: 38276,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Idaho',
    income: 32036,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Illinois',
    income: 40856,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Indiana',
    income: 36454,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Iowa',
    income: 37901,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Kansas',
    income: 37240,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Kentucky',
    income: 32295,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Louisiana',
    income: 37630,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Maine',
    income: 34492,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Maryland',
    income: 46509,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Massachusetts',
    income: 45792,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Michigan',
    income: 36390,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Minnesota',
    income: 40930,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Mississippi',
    income: 31700,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Missouri',
    income: 35628,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Montana',
    income: 32489,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Nebraska',
    income: 36817,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Nevada',
    income: 33560,
    gender: 'Male'
  })
  Graph.insert({
    location: 'New Hampshire',
    income: 42344,
    gender: 'Male'
  })
  Graph.insert({
    location: 'New Jersey',
    income: 46574,
    gender: 'Male'
  })
  Graph.insert({
    location: 'New Mexico',
    income: 30564,
    gender: 'Male'
  })
  Graph.insert({
    location: 'New York',
    income: 40570,
    gender: 'Male'
  })
  Graph.insert({
    location: 'North Carolina',
    income: 32379,
    gender: 'Male'
  })
  Graph.insert({
    location: 'North Dakota',
    income: 42186,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Ohio',
    income: 36958,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Oklahoma',
    income: 35488,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Oregon',
    income: 34277,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Pennsylvania',
    income: 39778,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Rhode Island',
    income: 40264,
    gender: 'Male'
  })
  Graph.insert({
    location: 'South Carolina',
    income: 31974,
    gender: 'Male'
  })
  Graph.insert({
    location: 'South Dakota',
    income: 35574,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Tennessee',
    income: 32734,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Texas',
    income: 36598,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Utah',
    income: 36791,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Vermont',
    income: 35502,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Virginia',
    income: 41421,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Washington',
    income: 41859,
    gender: 'Male'
  })
  Graph.insert({
    location: 'West Virginia',
    income: 33822,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Wisconsin',
    income: 37774,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Wyoming',
    income: 42376,
    gender: 'Male'
  })
  Graph.insert({
    location: 'Alabama',
    income: 22998,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Alaska',
    income: 29648,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Arizona',
    income: 25860,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Arkansas',
    income: 22642,
    gender: 'Female'
  })
  Graph.insert({
    location: 'California',
    income: 27038,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Colorado',
    income: 28642,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Connecticut',
    income: 32701,
    gender: 'Female'
  })
  Graph.insert({
    location: 'DC',
    income: 45201,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Delaware',
    income: 30711,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Florida',
    income: 25328,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Georgia',
    income: 25277,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Hawaii',
    income: 30911,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Idaho',
    income: 19349,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Illinois',
    income: 27501,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Indiana',
    income: 23449,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Iowa',
    income: 25007,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Kansas',
    income: 24650,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Kentucky',
    income: 23160,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Louisiana',
    income: 23460,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Maine',
    income: 25045,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Maryland',
    income: 35647,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Massachusetts',
    income: 31845,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Michigan',
    income: 22803,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Minnesota',
    income: 29658,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Mississippi',
    income: 22381,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Missouri',
    income: 24872,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Montana',
    income: 22262,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Nebraska',
    income: 25264,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Nevada',
    income: 26848,
    gender: 'Female'
  })
  Graph.insert({
    location: 'New Hampshire',
    income: 30621,
    gender: 'Female'
  })
  Graph.insert({
    location: 'New Jersey',
    income: 31765,
    gender: 'Female'
  })
  Graph.insert({
    location: 'New Mexico',
    income: 21976,
    gender: 'Female'
  })
  Graph.insert({
    location: 'New York',
    income: 30878,
    gender: 'Female'
  })
  Graph.insert({
    location: 'North Carolina',
    income: 25123,
    gender: 'Female'
  })
  Graph.insert({
    location: 'North Dakota',
    income: 26799,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Ohio',
    income: 24873,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Oklahoma',
    income: 22889,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Oregon',
    income: 24310,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Pennsylvania',
    income: 26505,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Rhode Island',
    income: 30200,
    gender: 'Female'
  })
  Graph.insert({
    location: 'South Carolina',
    income: 23796,
    gender: 'Female'
  })
  Graph.insert({
    location: 'South Dakota',
    income: 25063,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Tennessee',
    income: 23982,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Texas',
    income: 25264,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Utah',
    income: 21143,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Vermont',
    income: 26541,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Virginia',
    income: 30119,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Washington',
    income: 28451,
    gender: 'Female'
  })
  Graph.insert({
    location: 'West Virginia',
    income: 22951,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Wisconsin',
    income: 26173,
    gender: 'Female'
  })
  Graph.insert({
    location: 'Wyoming',
    income: 22526,
    gender: 'Female'
  })


  //income by gender and race
  Graph.insert({
    income: 51388,
    gender: 'Male',
    race: 'White'
  })
  Graph.insert({
    income: 40905,
    gender: 'Female',
    race: 'White'
  })
  Graph.insert({
    income: 38243,
    gender: 'Male',
    race: 'African-Armerican/Black'
  })
  Graph.insert({
    income: 34426,
    gender: 'Female',
    race: 'African-Armerican/Black'
  })
  Graph.insert({
    income: 36465,
    gender: 'Male',
    race: 'American-Indian/Alaska-Native'
  })
  Graph.insert({
    income: 31810,
    gender: 'Female',
    race: 'American-Indian/Alaska-Native'
  })
  Graph.insert({
    income: 60897,
    gender: 'Male',
    race: 'Asian'
  })
  Graph.insert({
    income: 49628,
    gender: 'Female',
    race: 'Asian'
  })
  Graph.insert({
    income: 39510,
    gender: 'Male',
    race: 'Native-Hawaiian/Pacific-Islander'
  })
  Graph.insert({
    income: 33091,
    gender: 'Female',
    race: 'Native-Hawaiian/Pacific-Islander'
  })
  Graph.insert({
    income: 31567,
    gender: 'Male',
    race: 'Other'
  })
  Graph.insert({
    income: 27129,
    gender: 'Female',
    race: 'Other'
  })

  // income by gender/occupation
  Graph.insert({
    income: 80809,
    gender: 'Male',
    occupation: 'Management occupations'
  })
  Graph.insert({
    income: 61138,
    gender: 'Female',
    occupation: 'Management occupations'
  })
  Graph.insert({
    income: 71816,
    gender: 'Male',
    occupation: 'Business and financial operations occupations'
  })
  Graph.insert({
    income: 55043,
    gender: 'Female',
    occupation: 'Business and financial operations occupations'
  })
  Graph.insert({
    income: 82130,
    gender: 'Male',
    occupation: 'Computer and mathematical occupations'
  })
  Graph.insert({
    income: 71378,
    gender: 'Female',
    occupation: 'Computer and mathematical occupations'
  })
  Graph.insert({
    income: 81198,
    gender: 'Male',
    occupation: 'Architecture and engineering occupations'
  })
  Graph.insert({
    income: 70435,
    gender: 'Female',
    occupation: 'Architecture and engineering occupations'
  })
  Graph.insert({
    income: 70726,
    gender: 'Male',
    occupation: 'Life, physical, and social science occupations'
  })
  Graph.insert({
    income: 59905,
    gender: 'Female',
    occupation: 'Life, physical, and social science occupations'
  })
  Graph.insert({
    income: 45658,
    gender: 'Male',
    occupation: 'Community and social services occupations'
  })
  Graph.insert({
    income: 41893,
    gender: 'Female',
    occupation: 'Community and social services occupations'
  })
  Graph.insert({
    income: 120270,
    gender: 'Male',
    occupation: 'Legal occupations'
  })
  Graph.insert({
    income: 64121,
    gender: 'Female',
    occupation: 'Legal occupations'
  })
  Graph.insert({
    income: 55772,
    gender: 'Male',
    occupation: 'Education, training, and library occupations'
  })
  Graph.insert({
    income: 45789,
    gender: 'Female',
    occupation: 'Education, training, and library occupations'
  })
  Graph.insert({
    income: 55746,
    gender: 'Male',
    occupation: 'Arts, design, entertainment, sports, and media occupations'
  })
  Graph.insert({
    income: 47131,
    gender: 'Female',
    occupation: 'Arts, design, entertainment, sports, and media occupations'
  })
  Graph.insert({
    income: 80084,
    gender: 'Male',
    occupation: 'Healthcare practitioner and technical occupations'
  })
  Graph.insert({
    income: 56629,
    gender: 'Female',
    occupation: 'Healthcare practitioner and technical occupations'
  })
  Graph.insert({
    income: 30921,
    gender: 'Male',
    occupation: 'Healthcare support occupations'
  })
  Graph.insert({
    income: 27170,
    gender: 'Female',
    occupation: 'Healthcare support occupations'
  })
  Graph.insert({
    income: 52118,
    gender: 'Male',
    occupation: 'Protective service occupations'
  })
  Graph.insert({
    income: 40787,
    gender: 'Female',
    occupation: 'Protective service occupations'
  })
  Graph.insert({
    income: 23729,
    gender: 'Male',
    occupation: 'Food preparation and serving related occupations'
  })
  Graph.insert({
    income: 20620,
    gender: 'Female',
    occupation: 'Food preparation and serving related occupations'
  })
  Graph.insert({
    income: 28980,
    gender: 'Male',
    occupation: 'Building and ground cleaning and maintenance occupations'
  })
  Graph.insert({
    income: 21421,
    gender: 'Female',
    occupation: 'Building and ground cleaning and maintenance occupations'
  })
  Graph.insert({
    income: 29220,
    gender: 'Male',
    occupation: 'Personal care and service occupations'
  })
  Graph.insert({
    income: 22718,
    gender: 'Female',
    occupation: 'Personal care and service occupations'
  })
  Graph.insert({
    income: 50928,
    gender: 'Male',
    occupation: 'Sales and related occupations'
  })
  Graph.insert({
    income: 32588,
    gender: 'Female',
    occupation: 'Sales and related occupations'
  })
  Graph.insert({
    income: 39077,
    gender: 'Male',
    occupation: 'Office and administrative support occupations'
  })
  Graph.insert({
    income: 34962,
    gender: 'Female',
    occupation: 'Office and administrative support occupations'
  })
  Graph.insert({
    income: 26962,
    gender: 'Male',
    occupation: 'Farming, fishing, and forestry occupations'
  })
  Graph.insert({
    income: 20606,
    gender: 'Female',
    occupation: 'Farming, fishing, and forestry occupations'
  })
  Graph.insert({
    income: 40300,
    gender: 'Male',
    occupation: 'Construction and extraction occupations'
  })
  Graph.insert({
    income: 35673,
    gender: 'Female',
    occupation: 'Construction and extraction occupations'
  })
  Graph.insert({
    income: 45515,
    gender: 'Male',
    occupation: 'Installation, maintenance, and repair occupations'
  })
  Graph.insert({
    income: 41070,
    gender: 'Female',
    occupation: 'Installation, maintenance, and repair occupations'
  })
  Graph.insert({
    income: 40435,
    gender: 'Male',
    occupation: 'Production occupations'
  })
  Graph.insert({
    income: 27256,
    gender: 'Female',
    occupation: 'Production occupations'
  })
  Graph.insert({
    income: 42204,
    gender: 'Male',
    occupation: 'Transportation occupations'
  })
  Graph.insert({
    income: 31533,
    gender: 'Female',
    occupation: 'Transportation occupations'
  })
  Graph.insert({
    income: 31092,
    gender: 'Male',
    occupation: 'Material moving occupations'
  })
  Graph.insert({
    income: 24835,
    gender: 'Female',
    occupation: 'Material moving occupations'
  })
  console.log('Done init');
}
*/
// module.exports = init;
