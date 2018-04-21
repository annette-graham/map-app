exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('countries').insert([
          { id: 0, country_code: 'AF', name: 'Afghanistan', capital: 'Kabul', language: 'Pashto, Uzbek,Turkmen', currency: 'AFN', population: '27657145' },
          { id: 1, country_code: 'AX', name: 'Åland Islands', capital: 'Mariehamn', language: 'Swedish', currency: 'EUR', population: '28875' },
          { id: 2, country_code: 'AL', name: 'Albania', capital: 'Tirana', language: 'Albanian', currency: 'ALL', population: '2886026' },
          { id: 3, country_code: 'DZ', name: 'Algeria', capital: 'Algiers', language: 'Arabic', currency: 'DZD', population: '40400000' },
          { id: 4, country_code: 'AS', name: 'American Samoa', capital: 'Pago Pago', language: 'English, Samoan', currency: 'USD', population: '57100' },
          { id: 5, country_code: 'AD', name: 'Andorra', capital: 'Andorra la Vella', language: 'Catalan', currency: 'EUR', population: '78014' },
          { id: 6, country_code: 'AO', name: 'Angola', capital: 'Luanda', language: 'Portuguese', currency: 'AOA', population: '25868000' },
          { id: 7, country_code: 'AI', name: 'Anguilla', capital: 'The Valley', language: 'English', currency: 'XCD', population: '13452' },
          { id: 8, country_code: 'AQ', name: 'Antarctica', capital: '', language: 'English, Russian', currency: 'AUD,GBP', population: '1000' },
          { id: 9, country_code: 'AG', name: 'Antigua and Barbuda', capital: 'Saint John\'s', language: 'English', currency: 'XCD', population: '86295' },
          { id: 10, country_code: 'AR', name: 'Argentina', capital: 'Buenos Aires', language: 'Spanish, Guaraní', currency: 'ARS', population: '43590400' },
          { id: 11, country_code: 'AM', name: 'Armenia', capital: 'Yerevan', language: 'Armenian, Russian', currency: 'AMD', population: '2994400' },
          { id: 12, country_code: 'AW', name: 'Aruba', capital: 'Oranjestad', language: 'Dutch, (Eastern) Punjabi', currency: 'AWG', population: '107394' },
          { id: 13, country_code: 'AU', name: 'Australia', capital: 'Canberra', language: 'English', currency: 'AUD', population: '24117360' },
          { id: 14, country_code: 'AT', name: 'Austria', capital: 'Vienna', language: 'German', currency: 'EUR', population: '8725931' },
          { id: 15, country_code: 'AZ', name: 'Azerbaijan', capital: 'Baku', language: 'Azerbaijani', currency: 'AZN', population: '9730500' },
          { id: 16, country_code: 'BS', name: 'Bahamas', capital: 'Nassau', language: 'English', currency: 'BSD', population: '378040' },
          { id: 17, country_code: 'BH', name: 'Bahrain', capital: 'Manama', language: 'Arabic', currency: 'BHD', population: '1404900' },
          { id: 18, country_code: 'BD', name: 'Bangladesh', capital: 'Dhaka', language: 'Bengali', currency: 'BDT', population: '161006790' },
          { id: 19, country_code: 'BB', name: 'Barbados', capital: 'Bridgetown', language: 'English', currency: 'BBD', population: '285000' },
          { id: 20, country_code: 'BY', name: 'Belarus', capital: 'Minsk', language: 'Belarusian, Russian', currency: 'BYN,BYR', population: '9498700' },
          { id: 21, country_code: 'BE', name: 'Belgium', capital: 'Brussels', language: 'Dutch, French, German', currency: 'EUR', population: '11319511' },
          { id: 22, country_code: 'BZ', name: 'Belize', capital: 'Belmopan', language: 'English, Spanish', currency: 'BZD', population: '370300' },
          { id: 23, country_code: 'BJ', name: 'Benin', capital: 'Porto-Novo', language: 'French', currency: 'XOF', population: '10653654' },
          { id: 24, country_code: 'BM', name: 'Bermuda', capital: 'Hamilton', language: 'English', currency: 'BMD', population: '61954' },
          { id: 25, country_code: 'BT', name: 'Bhutan', capital: 'Thimphu', language: 'Dzongkha', currency: 'BTN,INR', population: '775620' },
          { id: 26, country_code: 'BO', name: 'Bolivia (Plurinational State of)', capital: 'Sucre', language: 'Spanish, Aymara, Quechua', currency: 'BOB', population: '10985059' },
          { id: 27, country_code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba', capital: 'Kralendijk', language: 'Dutch', currency: 'USD', population: '17408' },
          { id: 28, country_code: 'BA', name: 'Bosnia and Herzegovina', capital: 'Sarajevo', language: 'Bosnian, Croatian, Serbian', currency: 'BAM', population: '3531159' },
          { id: 29, country_code: 'BW', name: 'Botswana', capital: 'Gaborone', language: 'English, Tswana', currency: 'BWP', population: '2141206' },
          { id: 30, country_code: 'BV', name: 'Bouvet Island', capital: '', language: 'Norwegian, Norwegian Bokmål, Norwegian Nynorsk', currency: 'NOK', population: '0' },
          { id: 31, country_code: 'BR', name: 'Brazil', capital: 'Brasília', language: 'Portuguese', currency: 'BRL', population: '206135893' },
          { id: 32, country_code: 'IO', name: 'British Indian Ocean Territory', capital: 'Diego Garcia', language: 'English', currency: 'USD', population: '3000' },
          { id: 33, country_code: 'UM', name: 'United States Minor Outlying Islands', capital: '', language: 'English', currency: 'USD', population: '300' },
          { id: 34, country_code: 'VG', name: 'Virgin Islands (British)', capital: 'Road Town', language: 'English', currency: ',USD', population: '28514' },
          { id: 35, country_code: 'VI', name: 'Virgin Islands (U.S.)', capital: 'Charlotte Amalie', language: 'English', currency: 'USD', population: '114743' },
          { id: 36, country_code: 'BN', name: 'Brunei Darussalam', capital: 'Bandar Seri Begawan', language: 'Malay', currency: 'BND,SGD', population: '411900' },
          { id: 37, country_code: 'BG', name: 'Bulgaria', capital: 'Sofia', language: 'Bulgarian', currency: 'BGN', population: '7153784' },
          { id: 38, country_code: 'BF', name: 'Burkina Faso', capital: 'Ouagadougou', language: 'French, Fula', currency: 'XOF', population: '19034397' },
          { id: 39, country_code: 'BI', name: 'Burundi', capital: 'Bujumbura', language: 'French, Kirundi', currency: 'BIF', population: '10114505' },
          { id: 40, country_code: 'KH', name: 'Cambodia', capital: 'Phnom Penh', language: 'Khmer', currency: 'KHR,USD', population: '15626444' },
          { id: 41, country_code: 'CM', name: 'Cameroon', capital: 'Yaoundé', language: 'English, French', currency: 'XAF', population: '22709892' },
          { id: 42, country_code: 'CA', name: 'Canada', capital: 'Ottawa', language: 'English, French', currency: 'CAD', population: '36155487' },
          { id: 43, country_code: 'CV', name: 'Cabo Verde', capital: 'Praia', language: 'Portuguese', currency: 'CVE', population: '531239' },
          { id: 44, country_code: 'KY', name: 'Cayman Islands', capital: 'George Town', language: 'English', currency: 'KYD', population: '58238' },
          { id: 45, country_code: 'CF', name: 'Central African Republic', capital: 'Bangui', language: 'French, Sango', currency: 'XAF', population: '4998000' },
          { id: 46, country_code: 'TD', name: 'Chad', capital: 'N\'Djamena', language: 'French, Arabic', currency: 'XAF', population: '14497000' },
          { id: 47, country_code: 'CL', name: 'Chile', capital: 'Santiago', language: 'Spanish', currency: 'CLP', population: '18191900' },
          { id: 48, country_code: 'CN', name: 'China', capital: 'Beijing', language: 'Chinese', currency: 'CNY', population: '1377422166' },
          { id: 49, country_code: 'CX', name: 'Christmas Island', capital: 'Flying Fish Cove', language: 'English', currency: 'AUD', population: '2072' },
          { id: 50, country_code: 'CC', name: 'Cocos (Keeling) Islands', capital: 'West Island', language: 'English', currency: 'AUD', population: '550' },
          { id: 51, country_code: 'CO', name: 'Colombia', capital: 'Bogotá', language: 'Spanish', currency: 'COP', population: '48759958' },
          { id: 52, country_code: 'KM', name: 'Comoros', capital: 'Moroni', language: 'Arabic, French', currency: 'KMF', population: '806153' },
          { id: 53, country_code: 'CG', name: 'Congo', capital: 'Brazzaville', language: 'French, Lingala', currency: 'XAF', population: '4741000' },
          { id: 54, country_code: 'CD', name: 'Congo (Democratic Republic of the)', capital: 'Kinshasa', language: 'French,Lingala,Kongo,Swahili,Luba-Katanga', currency: 'CDF', population: '85026000' },
          { id: 55, country_code: 'CK', name: 'Cook Islands', capital: 'Avarua', language: 'English', currency: 'NZD,CKD', population: '18100' },
          { id: 56, country_code: 'CR', name: 'Costa Rica', capital: 'San José', language: 'Spanish', currency: 'CRC', population: '4890379' },
          { id: 57, country_code: 'HR', name: 'Croatia', capital: 'Zagreb', language: 'Croatian', currency: 'HRK', population: '4190669' },
          { id: 58, country_code: 'CU', name: 'Cuba', capital: 'Havana', language: 'Spanish', currency: 'CUC,CUP', population: '11239004' },
          { id: 59, country_code: 'CW', name: 'Curaçao', capital: 'Willemstad', language: 'Dutch, (Eastern) Punjabi,English', currency: 'ANG', population: '154843' },
          { id: 60, country_code: 'CY', name: 'Cyprus', capital: 'Nicosia', language: 'Greek (modern), Turkish, Armenian', currency: 'EUR', population: '847000' },
          { id: 61, country_code: 'CZ', name: 'Czech Republic', capital: 'Prague', language: 'Czech, Slovak', currency: 'CZK', population: '10558524' },
          { id: 62, country_code: 'DK', name: 'Denmark', capital: 'Copenhagen', language: 'Danish', currency: 'DKK', population: '5717014' },
          { id: 63, country_code: 'DJ', name: 'Djibouti', capital: 'Djibouti', language: 'French, Arabic', currency: 'DJF', population: '900000' },
          { id: 64, country_code: 'DM', name: 'Dominica', capital: 'Roseau', language: 'English', currency: 'XCD', population: '71293' },
          { id: 65, country_code: 'DO', name: 'Dominican Republic', capital: 'Santo Domingo', language: 'Spanish', currency: 'DOP', population: '10075045' },
          { id: 66, country_code: 'EC', name: 'Ecuador', capital: 'Quito', language: 'Spanish', currency: 'USD', population: '16545799' },
          { id: 67, country_code: 'EG', name: 'Egypt', capital: 'Cairo', language: 'Arabic', currency: 'EGP', population: '91290000' },
          { id: 68, country_code: 'SV', name: 'El Salvador', capital: 'San Salvador', language: 'Spanish', currency: 'USD', population: '6520675' },
          { id: 69, country_code: 'GQ', name: 'Equatorial Guinea', capital: 'Malabo', language: 'Spanish, French', currency: 'XAF', population: '1222442' },
          { id: 70, country_code: 'ER', name: 'Eritrea', capital: 'Asmara', language: 'Tigrinya, Arabic, English', currency: 'ERN', population: '5352000' },
          { id: 71, country_code: 'EE', name: 'Estonia', capital: 'Tallinn', language: 'Estonian', currency: 'EUR', population: '1315944' },
          { id: 72, country_code: 'ET', name: 'Ethiopia', capital: 'Addis Ababa', language: 'Amharic', currency: 'ETB', population: '92206005' },
          { id: 73, country_code: 'FK', name: 'Falkland Islands (Malvinas)', capital: 'Stanley', language: 'English', currency: 'FKP', population: '2563' },
          { id: 74, country_code: 'FO', name: 'Faroe Islands', capital: 'Tórshavn', language: 'Faroese', currency: 'DKK,(none)', population: '49376' },
          { id: 75, country_code: 'FJ', name: 'Fiji', capital: 'Suva', language: 'English, Fijian Hindi, Urdu', currency: 'FJD', population: '867000' },
          { id: 76, country_code: 'FI', name: 'Finland', capital: 'Helsinki', language: 'Finnish, Swedish', currency: 'EUR', population: '5491817' },
          { id: 77, country_code: 'FR', name: 'France', capital: 'Paris', language: 'French', currency: 'EUR', population: '66710000' },
          { id: 78, country_code: 'GF', name: 'French Guiana', capital: 'Cayenne', language: 'French', currency: 'EUR', population: '254541' },
          { id: 79, country_code: 'PF', name: 'French Polynesia', capital: 'Papeetē', language: 'French', currency: 'XPF', population: '271800' },
          { id: 80, country_code: 'TF', name: 'French Southern Territories', capital: 'Port-aux-Français', language: 'French', currency: 'EUR', population: '140' },
          { id: 81, country_code: 'GA', name: 'Gabon', capital: 'Libreville', language: 'French', currency: 'XAF', population: '1802278' },
          { id: 82, country_code: 'GM', name: 'Gambia', capital: 'Banjul', language: 'English', currency: 'GMD', population: '1882450' },
          { id: 83, country_code: 'GE', name: 'Georgia', capital: 'Tbilisi', language: 'Georgian', currency: 'GEL', population: '3720400' },
          { id: 84, country_code: 'DE', name: 'Germany', capital: 'Berlin', language: 'German', currency: 'EUR', population: '81770900' },
          { id: 85, country_code: 'GH', name: 'Ghana', capital: 'Accra', language: 'English', currency: 'GHS', population: '27670174' },
          { id: 86, country_code: 'GI', name: 'Gibraltar', capital: 'Gibraltar', language: 'English', currency: 'GIP', population: '33140' },
          { id: 87, country_code: 'GR', name: 'Greece', capital: 'Athens', language: 'Greek (modern)', currency: 'EUR', population: '10858018' },
          { id: 88, country_code: 'GL', name: 'Greenland', capital: 'Nuuk', language: 'Kalaallisut', currency: 'DKK', population: '55847' },
          { id: 89, country_code: 'GD', name: 'Grenada', capital: 'St. George\'s', language: 'English', currency: 'XCD', population: '103328' },
          { id: 90, country_code: 'GP', name: 'Guadeloupe', capital: 'Basse-Terre', language: 'French', currency: 'EUR', population: '400132' },
          { id: 91, country_code: 'GU', name: 'Guam', capital: 'Hagåtña', language: 'English, Chamorro, Spanish', currency: 'USD', population: '184200' },
          { id: 92, country_code: 'GT', name: 'Guatemala', capital: 'Guatemala City', language: 'Spanish', currency: 'GTQ', population: '16176133' },
          { id: 93, country_code: 'GG', name: 'Guernsey', capital: 'St. Peter Port', language: 'English, French', currency: 'GBP,(none)', population: '62999' },
          { id: 94, country_code: 'GN', name: 'Guinea', capital: 'Conakry', language: 'French, Fula', currency: 'GNF', population: '12947000' },
          { id: 95, country_code: 'GW', name: 'Guinea-Bissau', capital: 'Bissau', language: 'Portuguese', currency: 'XOF', population: '1547777' },
          { id: 96, country_code: 'GY', name: 'Guyana', capital: 'Georgetown', language: 'English', currency: 'GYD', population: '746900' },
          { id: 97, country_code: 'HT', name: 'Haiti', capital: 'Port-au-Prince', language: 'French, Haitian', currency: 'HTG', population: '11078033' },
          { id: 98, country_code: 'HM', name: 'Heard Island and McDonald Islands', capital: '', language: 'English', currency: 'AUD', population: '0' },
          { id: 99, country_code: 'VA', name: 'Holy See', capital: 'Rome', language: 'Latin, Italian, French, German', currency: 'EUR', population: '451' },
          { id: 100, country_code: 'HN', name: 'Honduras', capital: 'Tegucigalpa', language: 'Spanish', currency: 'HNL', population: '8576532' },
        ]),
        knex('countries').insert([
          { id: 101, country_code: 'HK', name: 'Hong Kong', capital: 'City of Victoria', language: 'English, Chinese', currency: 'HKD', population: '7324300' },
          { id: 102, country_code: 'HU', name: 'Hungary', capital: 'Budapest', language: 'Hungarian', currency: 'HUF', population: '9823000' },
          { id: 103, country_code: 'IS', name: 'Iceland', capital: 'Reykjavík', language: 'Icelandic', currency: 'ISK', population: '334300' },
          { id: 104, country_code: 'IN', name: 'India', capital: 'New Delhi', language: 'Hindi, English', currency: 'INR', population: '1295210000' },
          { id: 105, country_code: 'ID', name: 'Indonesia', capital: 'Jakarta', language: 'Indonesian', currency: 'IDR', population: '258705000' },
          { id: 106, country_code: 'CI', name: 'Côte d\'Ivoire', capital: 'Yamoussoukro', language: 'French', currency: 'XOF', population: '22671331' },
          { id: 107, country_code: 'IR', name: 'Iran (Islamic Republic of)', capital: 'Tehran', language: 'Persian (Farsi)', currency: 'IRR', population: '79369900' },
          { id: 108, country_code: 'IQ', name: 'Iraq', capital: 'Baghdad', language: 'Arabic, Kurdish', currency: 'IQD', population: '37883543' },
          { id: 109, country_code: 'IE', name: 'Ireland', capital: 'Dublin', language: 'Irish, English', currency: 'EUR', population: '6378000' },
          { id: 110, country_code: 'IM', name: 'Isle of Man', capital: 'Douglas', language: 'English, Manx', currency: 'GBP,IMP[G]', population: '84497' },
          { id: 111, country_code: 'IL', name: 'Israel', capital: 'Jerusalem', language: 'Hebrew (modern),Arabic', currency: 'ILS', population: '8527400' },
          { id: 112, country_code: 'IT', name: 'Italy', capital: 'Rome', language: 'Italian', currency: 'EUR', population: '60665551' },
          { id: 113, country_code: 'JM', name: 'Jamaica', capital: 'Kingston', language: 'English', currency: 'JMD', population: '2723246' },
          { id: 114, country_code: 'JP', name: 'Japan', capital: 'Tokyo', language: 'Japanese', currency: 'JPY', population: '126960000' },
          { id: 115, country_code: 'JE', name: 'Jersey', capital: 'Saint Helier', language: 'English, French', currency: 'GBP,JEP[G]', population: '100800' },
          { id: 116, country_code: 'JO', name: 'Jordan', capital: 'Amman', language: 'Arabic', currency: 'JOD', population: '9531712' },
          { id: 117, country_code: 'KZ', name: 'Kazakhstan', capital: 'Astana', language: 'Kazakh, Russian', currency: 'KZT', population: '17753200' },
          { id: 118, country_code: 'KE', name: 'Kenya', capital: 'Nairobi', language: 'English, Swahili', currency: 'KES', population: '47251000' },
          { id: 119, country_code: 'KI', name: 'Kiribati', capital: 'South Tarawa', language: 'English', currency: 'AUD,(none)', population: '113400' },
          { id: 120, country_code: 'KW', name: 'Kuwait', capital: 'Kuwait City', language: 'Arabic', currency: 'KWD', population: '4183658' },
          { id: 121, country_code: 'KG', name: 'Kyrgyzstan', capital: 'Bishkek', language: 'Kyrgyz, Russian', currency: 'KGS', population: '6047800' },
          { id: 122, country_code: 'LA', name: 'Lao People\'s Democratic Republic', capital: 'Vientiane', language: 'Lao', currency: 'LAK', population: '6492400' },
          { id: 123, country_code: 'LV', name: 'Latvia', capital: 'Riga', language: 'Latvian', currency: 'EUR', population: '1961600' },
          { id: 124, country_code: 'LB', name: 'Lebanon', capital: 'Beirut', language: 'Arabic, French', currency: 'LBP', population: '5988000' },
          { id: 125, country_code: 'LS', name: 'Lesotho', capital: 'Maseru', language: 'English, Southern Sotho', currency: 'LSL,ZAR', population: '1894194' },
          { id: 126, country_code: 'LR', name: 'Liberia', capital: 'Monrovia', language: 'English', currency: 'LRD', population: '4615000' },
          { id: 127, country_code: 'LY', name: 'Libya', capital: 'Tripoli', language: 'Arabic', currency: 'LYD', population: '6385000' },
          { id: 128, country_code: 'LI', name: 'Liechtenstein', capital: 'Vaduz', language: 'German', currency: 'CHF', population: '37623' },
          { id: 129, country_code: 'LT', name: 'Lithuania', capital: 'Vilnius', language: 'Lithuanian', currency: 'EUR', population: '2872294' },
          { id: 130, country_code: 'LU', name: 'Luxembourg', capital: 'Luxembourg', language: 'French, German, Luxembourgish', currency: 'EUR', population: '576200' },
          { id: 131, country_code: 'MO', name: 'Macao', capital: '', language: 'Chinese,Portuguese', currency: 'MOP', population: '649100' },
          { id: 132, country_code: 'MK', name: 'Macedonia (the former Yugoslav Republic of)', capital: 'Skopje', language: 'Macedonian', currency: 'MKD', population: '2058539' },
          { id: 133, country_code: 'MG', name: 'Madagascar', capital: 'Antananarivo', language: 'French, Malagasy', currency: 'MGA', population: '22434363' },
          { id: 134, country_code: 'MW', name: 'Malawi', capital: 'Lilongwe', language: 'English, Chichewa', currency: 'MWK', population: '16832910' },
          { id: 135, country_code: 'MY', name: 'Malaysia', capital: 'Kuala Lumpur', language: 'Malaysian', currency: 'MYR', population: '31405416' },
          { id: 136, country_code: 'MV', name: 'Maldives', capital: 'Malé', language: 'Divehi', currency: 'MVR', population: '344023' },
          { id: 137, country_code: 'ML', name: 'Mali', capital: 'Bamako', language: 'French', currency: 'XOF', population: '18135000' },
          { id: 138, country_code: 'MT', name: 'Malta', capital: 'Valletta', language: 'Maltese, English', currency: 'EUR', population: '425384' },
          { id: 139, country_code: 'MH', name: 'Marshall Islands', capital: 'Majuro', language: 'English, Marshallese', currency: 'USD', population: '54880' },
          { id: 140, country_code: 'MQ', name: 'Martinique', capital: 'Fort-de-France', language: 'French', currency: 'EUR', population: '378243' },
          { id: 141, country_code: 'MR', name: 'Mauritania', capital: 'Nouakchott', language: 'Arabic', currency: 'MRO', population: '3718678' },
          { id: 142, country_code: 'MU', name: 'Mauritius', capital: 'Port Louis', language: 'English', currency: 'MUR', population: '1262879' },
          { id: 143, country_code: 'YT', name: 'Mayotte', capital: 'Mamoudzou', language: 'French', currency: 'EUR', population: '226915' },
          { id: 144, country_code: 'MX', name: 'Mexico', capital: 'Mexico City', language: 'Spanish', currency: 'MXN', population: '122273473' },
          { id: 145, country_code: 'FM', name: 'Micronesia (Federated States of)', capital: 'Palikir', language: 'English', currency: ',USD', population: '102800' },
          { id: 146, country_code: 'MD', name: 'Moldova (Republic of)', capital: 'Chișinău', language: 'Romanian', currency: 'MDL', population: '3553100' },
          { id: 147, country_code: 'MC', name: 'Monaco', capital: 'Monaco', language: 'French', currency: 'EUR', population: '38400' },
          { id: 148, country_code: 'MN', name: 'Mongolia', capital: 'Ulan Bator', language: 'Mongolian', currency: 'MNT', population: '3093100' },
          { id: 149, country_code: 'ME', name: 'Montenegro', capital: 'Podgorica', language: 'Serbian, Bosnian, Albanian, Croatian', currency: 'EUR', population: '621810' },
          { id: 150, country_code: 'MS', name: 'Montserrat', capital: 'Plymouth', language: 'English', currency: 'XCD', population: '4922' },
          { id: 151, country_code: 'MA', name: 'Morocco', capital: 'Rabat', language: 'Arabic', currency: 'MAD', population: '33337529' },
          { id: 152, country_code: 'MZ', name: 'Mozambique', capital: 'Maputo', language: 'Portuguese', currency: 'MZN', population: '26423700' },
          { id: 153, country_code: 'MM', name: 'Myanmar', capital: 'Naypyidaw', language: 'Burmese', currency: 'MMK', population: '51419420' },
          { id: 154, country_code: 'NA', name: 'Namibia', capital: 'Windhoek', language: 'English, Afrikaans', currency: 'NAD,ZAR', population: '2324388' },
          { id: 155, country_code: 'NR', name: 'Nauru', capital: 'Yaren', language: 'English, Nauruan', currency: 'AUD,(none)', population: '10084' },
          { id: 156, country_code: 'NP', name: 'Nepal', capital: 'Kathmandu', language: 'Nepali', currency: 'NPR', population: '28431500' },
          { id: 157, country_code: 'NL', name: 'Netherlands', capital: 'Amsterdam', language: 'Dutch', currency: 'EUR', population: '17019800' },
          { id: 158, country_code: 'NC', name: 'New Caledonia', capital: 'Nouméa', language: 'French', currency: 'XPF', population: '268767' },
          { id: 159, country_code: 'NZ', name: 'New Zealand', capital: 'Wellington', language: 'English, Māori, NZ Sign Language', currency: 'NZD', population: '4697854' },
          { id: 160, country_code: 'NI', name: 'Nicaragua', capital: 'Managua', language: 'Spanish', currency: 'NIO', population: '6262703' },
          { id: 161, country_code: 'NE', name: 'Niger', capital: 'Niamey', language: 'French', currency: 'XOF', population: '20715000' },
          { id: 162, country_code: 'NG', name: 'Nigeria', capital: 'Abuja', language: 'English', currency: 'NGN', population: '186988000' },
          { id: 163, country_code: 'NU', name: 'Niue', capital: 'Alofi', language: 'English', currency: 'NZD,(none)', population: '1470' },
          { id: 164, country_code: 'NF', name: 'Norfolk Island', capital: 'Kingston', language: 'English', currency: 'AUD', population: '2302' },
          { id: 165, country_code: 'KP', name: 'Korea (Democratic People\'s Republic of)', capital: 'Pyongyang', language: 'Korean', currency: 'KPW', population: '25281000' },
          { id: 166, country_code: 'MP', name: 'Northern Mariana Islands', capital: 'Saipan', language: 'English, Chamorro', currency: 'USD', population: '56940' },
          { id: 167, country_code: 'NO', name: 'Norway', capital: 'Oslo', language: 'Norwegian, Norwegian Bokmål, Norwegian Nynorsk', currency: 'NOK', population: '5223256' },
          { id: 168, country_code: 'OM', name: 'Oman', capital: 'Muscat', language: 'Arabic', currency: 'OMR', population: '4420133' },
          { id: 169, country_code: 'PK', name: 'Pakistan', capital: 'Islamabad', language: 'English, Urdu', currency: 'PKR', population: '194125062' },
          { id: 170, country_code: 'PW', name: 'Palau', capital: 'Ngerulmud', language: 'English', currency: '(none),USD', population: '17950' },
          { id: 171, country_code: 'PS', name: 'Palestine, State of', capital: 'Ramallah', language: 'Arabic', currency: 'ILS', population: '4682467' },
          { id: 172, country_code: 'PA', name: 'Panama', capital: 'Panama City', language: 'Spanish', currency: 'PAB,USD', population: '3814672' },
          { id: 173, country_code: 'PG', name: 'Papua New Guinea', capital: 'Port Moresby', language: 'English', currency: 'PGK', population: '8083700' },
          { id: 174, country_code: 'PY', name: 'Paraguay', capital: 'Asunción', language: 'Spanish, Guaraní', currency: 'PYG', population: '6854536' },
          { id: 175, country_code: 'PE', name: 'Peru', capital: 'Lima', language: 'Spanish', currency: 'PEN', population: '31488700' },
          { id: 176, country_code: 'PH', name: 'Philippines', capital: 'Manila', language: 'English', currency: 'PHP', population: '103279800' },
          { id: 177, country_code: 'PN', name: 'Pitcairn', capital: 'Adamstown', language: 'English', currency: 'NZD,', population: '56' },
          { id: 178, country_code: 'PL', name: 'Poland', capital: 'Warsaw', language: 'Polish', currency: 'PLN', population: '38437239' },
          { id: 179, country_code: 'PT', name: 'Portugal', capital: 'Lisbon', language: 'Portuguese', currency: 'EUR', population: '10374822' },
          { id: 180, country_code: 'PR', name: 'Puerto Rico', capital: 'San Juan', language: 'Spanish, English', currency: 'USD', population: '3474182' },
          { id: 181, country_code: 'QA', name: 'Qatar', capital: 'Doha', language: 'Arabic', currency: 'QAR', population: '2587564' },
          { id: 182, country_code: 'XK', name: 'Republic of Kosovo', capital: 'Pristina', language: 'Albanian, Serbian', currency: 'EUR', population: '1733842' },
          { id: 183, country_code: 'RE', name: 'Réunion', capital: 'Saint-Denis', language: 'French', currency: 'EUR', population: '840974' },
          { id: 184, country_code: 'RO', name: 'Romania', capital: 'Bucharest', language: 'Romanian', currency: 'RON', population: '19861408' },
          { id: 185, country_code: 'RU', name: 'Russian Federation', capital: 'Moscow', language: 'Russian', currency: 'RUB', population: '146599183' },
          { id: 186, country_code: 'RW', name: 'Rwanda', capital: 'Kigali', language: 'Kinyarwanda, English, French', currency: 'RWF', population: '11553188' },
          { id: 187, country_code: 'BL', name: 'Saint Barthélemy', capital: 'Gustavia', language: 'French', currency: 'EUR', population: '9417' },
          { id: 188, country_code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha', capital: 'Jamestown', language: 'English', currency: 'SHP', population: '4255' },
          { id: 189, country_code: 'KN', name: 'Saint Kitts and Nevis', capital: 'Basseterre', language: 'English', currency: 'XCD', population: '46204' },
          { id: 190, country_code: 'LC', name: 'Saint Lucia', capital: 'Castries', language: 'English', currency: 'XCD', population: '186000' },
          { id: 191, country_code: 'MF', name: 'Saint Martin (French part)', capital: 'Marigot', language: 'English, French, Dutch', currency: 'EUR', population: '36979' },
          { id: 192, country_code: 'PM', name: 'Saint Pierre and Miquelon', capital: 'Saint-Pierre', language: 'French', currency: 'EUR', population: '6069' },
          { id: 193, country_code: 'VC', name: 'Saint Vincent and the Grenadines', capital: 'Kingstown', language: 'English', currency: 'XCD', population: '109991' },
          { id: 194, country_code: 'WS', name: 'Samoa', capital: 'Apia', language: 'Samoan, English', currency: 'WST', population: '194899' },
          { id: 195, country_code: 'SM', name: 'San Marino', capital: 'City of San Marino', language: 'Italian', currency: 'EUR', population: '33005' },
          { id: 196, country_code: 'ST', name: 'Sao Tome and Principe', capital: 'São Tomé', language: 'Portuguese', currency: 'STD', population: '187356' },
          { id: 197, country_code: 'SA', name: 'Saudi Arabia', capital: 'Riyadh', language: 'Arabic', currency: 'SAR', population: '32248200' },
          { id: 198, country_code: 'SN', name: 'Senegal', capital: 'Dakar', language: 'French', currency: 'XOF', population: '14799859' },
          { id: 199, country_code: 'RS', name: 'Serbia', capital: 'Belgrade', language: 'Serbian', currency: 'RSD', population: '7076372' },
        ]),
        knex('countries').insert([
          { id: 200, country_code: 'SC', name: 'Seychelles', capital: 'Victoria', language: 'French, English', currency: 'SCR', population: '91400' },
          { id: 201, country_code: 'SL', name: 'Sierra Leone', capital: 'Freetown', language: 'English', currency: 'SLL', population: '7075641' },
          { id: 202, country_code: 'SG', name: 'Singapore', capital: 'Singapore', language: 'English, Malay, Tamil, Chinese', currency: 'BND,SGD', population: '5535000' },
          { id: 203, country_code: 'SX', name: 'Sint Maarten (Dutch part)', capital: 'Philipsburg', language: 'Dutch, English', currency: 'ANG', population: '38247' },
          { id: 204, country_code: 'SK', name: 'Slovakia', capital: 'Bratislava', language: 'Slovak', currency: 'EUR', population: '5426252' },
          { id: 205, country_code: 'SI', name: 'Slovenia', capital: 'Ljubljana', language: 'Slovene', currency: 'EUR', population: '2064188' },
          { id: 206, country_code: 'SB', name: 'Solomon Islands', capital: 'Honiara', language: 'English', currency: 'SBD', population: '642000' },
          { id: 207, country_code: 'SO', name: 'Somalia', capital: 'Mogadishu', language: 'Somali, Arabic', currency: 'SOS', population: '11079000' },
          { id: 208, country_code: 'ZA', name: 'South Africa', capital: 'Pretoria', language: 'Afrikaans, English, Southern Ndebele, Southern Sotho, Swati, Tswana, Tsonga, Venda, Xhosa, Zulu', currency: 'ZAR', population: '55653654' },
          { id: 209, country_code: 'GS', name: 'South Georgia and the South Sandwich Islands', capital: 'King Edward Point', language: 'English', currency: 'GBP,(none)', population: '30' },
          { id: 210, country_code: 'KR', name: 'Korea (Republic of)', capital: 'Seoul', language: 'Korean', currency: 'KRW', population: '50801405' },
          { id: 211, country_code: 'SS', name: 'South Sudan', capital: 'Juba', language: 'English', currency: 'SSP', population: '12131000' },
          { id: 212, country_code: 'ES', name: 'Spain', capital: 'Madrid', language: 'Spanish', currency: 'EUR', population: '46438422' },
          { id: 213, country_code: 'LK', name: 'Sri Lanka', capital: 'Colombo', language: 'Sinhalese, Tamil', currency: 'LKR', population: '20966000' },
          { id: 214, country_code: 'SD', name: 'Sudan', capital: 'Khartoum', language: 'Arabic, English', currency: 'SDG', population: '39598700' },
          { id: 215, country_code: 'SR', name: 'Suriname', capital: 'Paramaribo', language: 'Dutch', currency: 'SRD', population: '541638' },
          { id: 216, country_code: 'SJ', name: 'Svalbard and Jan Mayen', capital: 'Longyearbyen', language: 'Norwegian', currency: 'NOK', population: '2562' },
          { id: 217, country_code: 'SZ', name: 'Swaziland', capital: 'Lobamba', language: 'English, Swati', currency: 'SZL', population: '1132657' },
          { id: 218, country_code: 'SE', name: 'Sweden', capital: 'Stockholm', language: 'Swedish', currency: 'SEK', population: '9894888' },
          { id: 219, country_code: 'CH', name: 'Switzerland', capital: 'Bern', language: 'German, French, Italian', currency: 'CHF', population: '8341600' },
          { id: 220, country_code: 'SY', name: 'Syrian Arab Republic', capital: 'Damascus', language: 'Arabic', currency: 'SYP', population: '18564000' },
          { id: 221, country_code: 'TW', name: 'Taiwan', capital: 'Taipei', language: 'Chinese', currency: 'TWD', population: '23503349' },
          { id: 222, country_code: 'TJ', name: 'Tajikistan', capital: 'Dushanbe', language: 'Tajik, Russian', currency: 'TJS', population: '8593600' },
          { id: 223, country_code: 'TZ', name: 'Tanzania, United Republic of', capital: 'Dodoma', language: 'Swahili, English', currency: 'TZS', population: '55155000' },
          { id: 224, country_code: 'TH', name: 'Thailand', capital: 'Bangkok', language: 'Thai', currency: 'THB', population: '65327652' },
          { id: 225, country_code: 'TL', name: 'Timor-Leste', capital: 'Dili', language: 'Portuguese', currency: 'USD,', population: '1167242' },
          { id: 226, country_code: 'TG', name: 'Togo', capital: 'Lomé', language: 'French', currency: 'XOF', population: '7143000' },
          { id: 227, country_code: 'TK', name: 'Tokelau', capital: 'Fakaofo', language: 'English', currency: 'NZD', population: '1411' },
          { id: 228, country_code: 'TO', name: 'Tonga', capital: 'Nuku\'alofa', language: 'English, Tonga (Tonga Islands)', currency: 'TOP', population: '103252' },
          { id: 229, country_code: 'TT', name: 'Trinidad and Tobago', capital: 'Port of Spain', language: 'English', currency: 'TTD', population: '1349667' },
          { id: 230, country_code: 'TN', name: 'Tunisia', capital: 'Tunis', language: 'Arabic', currency: 'TND', population: '11154400' },
          { id: 231, country_code: 'TR', name: 'Turkey', capital: 'Ankara', language: 'Turkish', currency: 'TRY', population: '78741053' },
          { id: 232, country_code: 'TM', name: 'Turkmenistan', capital: 'Ashgabat', language: 'Turkmen, Russian', currency: 'TMT', population: '4751120' },
          { id: 233, country_code: 'TC', name: 'Turks and Caicos Islands', capital: 'Cockburn Town', language: 'English', currency: 'USD', population: '31458' },
          { id: 234, country_code: 'TV', name: 'Tuvalu', capital: 'Funafuti', language: 'English', currency: 'AUD,TVD[G]', population: '10640' },
          { id: 235, country_code: 'UG', name: 'Uganda', capital: 'Kampala', language: 'English, Swahili', currency: 'UGX', population: '33860700' },
          { id: 236, country_code: 'UA', name: 'Ukraine', capital: 'Kiev', language: 'Ukrainian', currency: 'UAH', population: '42692393' },
          { id: 237, country_code: 'AE', name: 'United Arab Emirates', capital: 'Abu Dhabi', language: 'Arabic', currency: 'AED', population: '9856000' },
          { id: 238, country_code: 'GB', name: 'United Kingdom of Great Britain and Northern Ireland', capital: 'London', language: 'English', currency: 'GBP', population: '65110000' },
          { id: 239, country_code: 'US', name: 'United States of America', capital: 'Washington, D.C.', language: 'English', currency: 'USD', population: '323947000' },
          { id: 240, country_code: 'UY', name: 'Uruguay', capital: 'Montevideo', language: 'Spanish', currency: 'UYU', population: '3480222' },
          { id: 241, country_code: 'UZ', name: 'Uzbekistan', capital: 'Tashkent', language: 'Uzbek, Russian', currency: 'UZS', population: '31576400' },
          { id: 242, country_code: 'VU', name: 'Vanuatu', capital: 'Port Vila', language: 'Bislama, English, French', currency: 'VUV', population: '277500' },
          { id: 243, country_code: 'VE', name: 'Venezuela (Bolivarian Republic of)', capital: 'Caracas', language: 'Spanish', currency: 'VEF', population: '31028700' },
          { id: 244, country_code: 'VN', name: 'Viet Nam', capital: 'Hanoi', language: 'Vietnamese', currency: 'VND', population: '92700000' },
          { id: 245, country_code: 'WF', name: 'Wallis and Futuna', capital: 'Mata-Utu', language: 'French', currency: 'XPF', population: '11750' },
          { id: 246, country_code: 'EH', name: 'Western Sahara', capital: 'El Aaiún', language: 'Spanish', currency: 'MAD,DZD', population: '510713' },
          { id: 247, country_code: 'YE', name: 'Yemen', capital: 'Sana\'a', language: 'Arabic', currency: 'YER', population: '27478000' },
          { id: 248, country_code: 'ZM', name: 'Zambia', capital: 'Lusaka', language: 'English', currency: 'ZMW', population: '15933883' },
          { id: 249, country_code: 'ZW', name: 'Zimbabwe', capital: 'Harare', language: 'English, Shona, Northern Ndebele', currency: 'BWP,GBP,CNY,EUR,INR,JPY,ZAR,USD,(none)', population: '14240168' }
        ])
      ])
    });
};
