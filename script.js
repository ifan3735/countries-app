const countries = [
    {
        name: "Germany",
        population: 81770900,
        region: "Europe",
        capital: "Berlin",
        flag: "https://flagcdn.com/w320/de.png"
    },
    {
        name: "United States of America",
        population: 323947000,
        region: "Americas",
        capital: "Washington, D.C.",
        flag: "https://flagcdn.com/w320/us.png"
    },
    {
        name: "Brazil",
        population: 206135893,
        region: "Americas",
        capital: "Brasília",
        flag: "https://flagcdn.com/w320/br.png"
    },
    {
        name: "Iceland",
        population: 334300,
        region: "Europe",
        capital: "Reykjavik",
        flag: "https://flagcdn.com/w320/is.png"
    },
    {
        name: "Afghanistan",
        population: 27657145,
        region: "Asia",
        capital: "Kabul",
        flag: "https://flagcdn.com/w320/af.png"
    },
    {
        name: "Åland Islands",
        population: 28875,
        region: "Europe",
        capital: "Mariehamn",
        flag: "https://flagcdn.com/w320/ax.png"
    },
    {
        name: "Albania",
        population: 2886026,
        region: "Europe",
        capital: "Tirana",
        flag: "https://flagcdn.com/w320/al.png"
    },
    {
        name: "Algeria",
        population: 40400000,
        region: "Africa",
        capital: "Algiers",
        flag: "https://flagcdn.com/w320/dz.png"
    },
    {
        name:"Andorra",
        population:78014,
        region:"Europe",
        capital:"Andorra la Vella", 
        flag:"https://flagcdn.com/w320/ad.png"
    },
    {
       name:"Angola",
         population:25868000,
            region:"Africa",
            capital:"Luanda",
            flag:"https://flagcdn.com/w320/ao.png"
    },
    {
        name:"Anguilla",
        population:13452,
        region:"Americas",
        capital:"The Valley",
        flag:"https://flagcdn.com/w320/ai.png"
    },
    {
        name:"Antarctica",
        population:1000,
        region:"Polar",
        capital:"",
        flag:"https://flagcdn.com/w320/aq.png"
    },
    {
        name:"Antigua and Barbuda",
        population:86295,
        region:"Americas",
        capital:"Saint John's",
        flag:"https://flagcdn.com/w320/ag.png"
    }, 
    {
        name:"Argentina",
        population:43590400,
        region:"Americas",
        capital:"Buenos Aires",
        flag:"https://flagcdn.com/w320/ar.png"
    }, 
    {
        name:"Armenia",
        population:2994400,
        region:"Asia",
        capital:"Yerevan",
        flag:"https://flagcdn.com/w320/am.png"
    },
    {
        name:"Aruba",
        population:107394,
        region:"Americas",
        capital:"Oranjestad",
        flag:"https://flagcdn.com/w320/aw.png"
    },
    {
        name:"Australia",
        population:24117360,
        region:"Oceania",
        capital:"Canberra",
        flag:"https://flagcdn.com/w320/au.png"
    },
    {
        name:"Austria",
        population:8725931,
        region:"Europe",
        capital:"Vienna",
        flag:"https://flagcdn.com/w320/at.png"
    },
    {
        name:"Azerbaijan",
        population:9730500,
        region:"Asia",
        capital:"Baku",
        flag:"https://flagcdn.com/w320/az.png"
    },
    {
        name:"Bahamas",
        population:378040,
        region:"Americas",
        capital:"Nassau",
        flag:"https://flagcdn.com/w320/bs.png"
    },
    {
        name:"Bahrain",
        population:1404900,
        region:"Asia",
        capital:"Manama",
        flag:"https://flagcdn.com/w320/bh.png"
    },
    {
        name:"Bangladesh",
        population:161006790,
        region:"Asia",
        capital:"Dhaka",
        flag:"https://flagcdn.com/w320/bd.png"
    },{
        name:"Barbados",
        population:285000,
        region:"Americas",
        capital:"Bridgetown",
        flag:"https://flagcdn.com/w320/bb.png"
    },
    {
        name:"Belarus",
        population:9498700,
        region:"Europe",
        capital:"Minsk",
        flag:"https://flagcdn.com/w320/by.png"
    },
    {
        name:"Belgium",
        population:11319511,
        region:"Europe",
        capital:"Brussels",
        flag:"https://flagcdn.com/w320/be.png"
    }, 
    {
        name:"Belize",
        population:370300,
        region:"Americas",
        capital:"Belmopan",
        flag:"https://flagcdn.com/w320/bz.png"
    },
    {
        name:"Benin",
        population:10653654,
        region:"Africa",
        capital:"Porto-Novo",
        flag:"https://flagcdn.com/w320/bj.png"
    },
    {
        name:"Bermuda",
        population:61954,
        region:"Americas",
        capital:"Hamilton",
        flag:"https://flagcdn.com/w320/bm.png"
    },
    {
        name:"Bhutan",
        population:775620,
        region:"Asia",
        capital:"Thimphu",
        flag:"https://flagcdn.com/w320/bt.png"
    },
    {
        name:"Bolivia (Plurinational State of)",
        population:10985059,
        region:"Americas",
        capital:"Sucre",
        flag:"https://flagcdn.com/w320/bo.png"
    },
    {
        name:"Bonaire, Sint Eustatius and Saba",
        population:17408,
        region:"Americas",
        capital:"Kralendijk",
        flag:"https://flagcdn.com/w320/bq.png"
    },
    {
        name:"Bosnia and Herzegovina",
        population:3531159,
        region:"Europe",
        capital:"Sarajevo",
        flag:"https://flagcdn.com/w320/ba.png"
    },
    {
        name:"Botswana",
        population:2141206,
        region:"Africa",
        capital:"Gaborone",
        flag:"https://flagcdn.com/w320/bw.png"
    },
    {
        name:"kenya",
        population:53771296,
        region:"Africa",
        capital:"Nairobi",
        flag:"https://flagcdn.com/w320/ke.png"
    },
    {
        name:"Uganda",
        population:33860700,
        region:"Africa",
        capital:"Kampala",
        flag:"https://flagcdn.com/w320/ug.png"
    },
     {
     name:"Tanzania, United Republic of",
        population:55155000,
        region:"Africa",
        capital:"Dodoma",
        flag:"https://flagcdn.com/w320/tz.png"
    },
    {
        name:"Rwanda",
        population:11553188,
        region:"Africa",
        capital:"Kigali",
        flag:"https://flagcdn.com/w320/rw.png"
    },
    {
        name:"Burundi",
        population:10114505,
        region:"Africa",
        capital:"Bujumbura",
        flag:"https://flagcdn.com/w320/bi.png"
    },
    {
        name:"South Sudan",
        population:12131000,
        region:"Africa",
        capital:"Juba",
        flag:"https://flagcdn.com/w320/ss.png"
    },
    {
        name:"Ethiopia",
        population:92206005,
        region:"Africa",
        capital:"Addis Ababa",
        flag:"https://flagcdn.com/w320/et.png"
    },
    {
        name:"Somalia",
        population:11079000,
        region:"Africa",
        capital:"Mogadishu",
        flag:"https://flagcdn.com/w320/so.png"
    },
    {
        name:"Djibouti",
        population:900000,
        region:"Africa",
        capital:"Djibouti",
        flag:"https://flagcdn.com/w320/dj.png"
    },
    {
        name:"Eritrea",
        population:5352000,
        region:"Africa",
        capital:"Asmara",
        flag:"https://flagcdn.com/w320/er.png"
    },
    {
        name:"Sudan",
        population:39598700,
        region:"Africa",
        capital:"Khartoum",
        flag:"https://flagcdn.com/w320/sd.png"
    },
    {
        name:"Tunisia",
        population:11154400,
        region:"Africa",
        capital:"Tunis",
        flag:"https://flagcdn.com/w320/tn.png"
    },
    {
        name:"Libya",
        population:6385000,
        region:"Africa",
        capital:"Tripoli",
        flag:"https://flagcdn.com/w320/ly.png"
    },
    {
        name:"Morocco",
        population:33337529,
        region:"Africa",
        capital:"Rabat",
        flag:"https://flagcdn.com/w320/ma.png"
    },
    {
        name:"Western Sahara",
        population:510713,
        region:"Africa",
        capital:"El Aaiún",
        flag:"https://flagcdn.com/w320/eh.png"
    },
    {
        name:"Mauritania",
        population:3718678,
        region:"Africa",
        capital:"Nouakchott",
        flag:"https://flagcdn.com/w320/mr.png"
    },
    {
        name:"Mali",
        population:18135000,
        region:"Africa",
        capital:"Bamako",
        flag:"https://flagcdn.com/w320/ml.png"
    },
    {
        name:"Senegal",
        population:14799859,
        region:"Africa",
        capital:"Dakar",
        flag:"https://flagcdn.com/w320/sn.png"
    },
    {
        name:"Gambia",
        population:1882450,
        region:"Africa",
        capital:"Banjul",
        flag:"https://flagcdn.com/w320/gm.png"
    },
    {
        name:"Guinea-Bissau",
        population:1547777,
        region:"Africa",
        capital:"Bissau",
        flag:"https://flagcdn.com/w320/gw.png"
    },
    {
        name:"Guinea",
        population:12947000,
        region:"Africa",
        capital:"Conakry",
        flag:"https://flagcdn.com/w320/gn.png"
    },
    {
        name:"Sierra Leone",
        population:7075641,
        region:"Africa",
        capital:"Freetown",
        flag:"https://flagcdn.com/w320/sl.png"
    },
    {
        name:"Liberia",
        population:4615000,
        region:"Africa",
        capital:"Monrovia",
        flag:"https://flagcdn.com/w320/lr.png"
    },
    {
        name:"Côte d'Ivoire",
        population:22671331,
        region:"Africa",
        capital:"Yamoussoukro",
        flag:"https://flagcdn.com/w320/ci.png"
    },
    {
        name:"Ghana",
        population:27670174,
        region:"Africa",
        capital:"Accra",
        flag:"https://flagcdn.com/w320/gh.png"
    },
    {
        name:"Togo",
        population:7143000,
        region:"Africa",
        capital:"Lomé",
        flag:"https://flagcdn.com/w320/tg.png"
    },
     {
      name:"Nigeria",
        population:186988000,
        region:"Africa",
        capital:"Abuja",
        flag:"https://flagcdn.com/w320/ng.png"
    },
    {
        name:"Cameroon",
        population:22709892,
        region:"Africa",
        capital:"Yaoundé",
        flag:"https://flagcdn.com/w320/cm.png"
    },
    {
        name:"Equatorial Guinea",
        population:1222442,
        region:"Africa",
        capital:"Malabo",
        flag:"https://flagcdn.com/w320/gq.png"
    },
    {
        name:"Gabon",
        population:1802278,
        region:"Africa",
        capital:"Libreville",
        flag:"https://flagcdn.com/w320/ga.png"
    },
    {
        name:"Congo",
        population:4741000,
        region:"Africa",
        capital:"Brazzaville",
        flag:"https://flagcdn.com/w320/cg.png"
    },
    {
        name:"Democratic Republic of the Congo",
        population:85026000,
        region:"Africa",
        capital:"Kinshasa",
        flag:"https://flagcdn.com/w320/cd.png"
    },
    {
        name:"Central African Republic",
        population:4998000,
        region:"Africa",
        capital:"Bangui",
        flag:"https://flagcdn.com/w320/cf.png"
    },
    // {
    //     name:"Rwanda",
    //     population:11553188,
    //     region:"Africa",
    //     capital:"Kigali",
    //     flag:"https://flagcdn.com/w320/rw.png"
    // },
    // {
    //     name:"Burundi",
    //     population:10114505,
    //     region:"Africa",
    //     capital:"Bujumbura",
    //     flag:"https://flagcdn.com/w320/bi.png"
    // },
    // {
    //     name:"england",
    //     population:53771296,
    //     region:"Africa",
    //     capital:"Nairobi",
    //     flag:"https://flagcdn.com/w320/ke.png"
    // },
     {
        name:"lebanon",
        population:6825442,
        region:"Asia",
        capital:"Beirut",
        flag:"https://flagcdn.com/w320/lb.png"
    },
    {
        name:"jordan",
        population:9531712,
        region:"Asia",
        capital:"Amman",
        flag:"https://flagcdn.com/w320/jo.png"
    },
    {
        name:"syria",
        population:18512500,
        region:"Asia",
        capital:"Damascus",
        flag:"https://flagcdn.com/w320/sy.png"
    },
    // {
    //     name:"india"
    //     population:1295210000,
    //     region:"Asia",
    //     capital:"New Delhi",
    //     flag:"https://flagcdn.com/w320/in.png"
    // },
    {
        name:"pakistan",
        population:194125062,
        region:"Asia",
        capital:"Islamabad",
        flag:"https://flagcdn.com/w320/pk.png"
    },
    {
        name:"nepal",
        population:28431500,
        region:"Asia",
        capital:"Kathmandu",
        flag:"https://flagcdn.com/w320/np.png"
    },
    {
        name:"bhutan",
        population:775620,
        region:"Asia",
        capital:"Thimphu",
        flag:"https://flagcdn.com/w320/bt.png"
    },
    {
        name:"bangladesh",
        population:161006790,
        region:"Asia",
        capital:"Dhaka",
        flag:"https://flagcdn.com/w320/bd.png"
    },
    {
        name:"myanmar",
        population:51419420,
        region:"Asia",
        capital:"Naypyidaw",
        flag:"https://flagcdn.com/w320/mm.png"
    },
    {
        name:"thailand",
        population:65327652,
        region:"Asia",
        capital:"Bangkok",
        flag:"https://flagcdn.com/w320/th.png"
    },
    {
        name:"laos",
        population:6492400,
        region:"Asia",
        capital:"Vientiane",
        flag:"https://flagcdn.com/w320/la.png"
    }
];



const countryContainer = document.getElementById('countries');
const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('region-filter');
const themeToggle = document.getElementById('theme-toggle');

function displayCountries(filteredCountries) {
    countryContainer.innerHTML = '';
    filteredCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';
        countryCard.innerHTML = `
            <img src="${country.flag}" alt="Flag of ${country.name}">
            <h2>${country.name}</h2>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
        `;
        countryCard.addEventListener('click', () => displayCountryDetail(country));
        countryContainer.appendChild(countryCard);
    });
}

function displayCountryDetail(country) {
    const countryDetail = document.createElement('div');
    countryDetail.className = 'country-detail';
    countryDetail.innerHTML = `
        <button class="back-button">Back</button>
        <div>
            <img src="${country.flag}" alt="Flag of ${country.name}">
            <div>
                <h2>${country.name}</h2>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Capital:</strong> ${country.capital}</p>
            </div>
        </div>
    `;
    document.body.appendChild(countryDetail);
    countryContainer.style.display = 'none'; // Hide country list
    countryDetail.querySelector('.back-button').addEventListener('click', () => {
        document.body.removeChild(countryDetail);
        countryContainer.style.display = 'flex'; // Show country list
    });
}

function filterCountries() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedRegion = regionFilter.value;
    const filteredCountries = countries.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(searchTerm);
        const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });
    displayCountries(filteredCountries);
}

searchInput.addEventListener('input', filterCountries);
regionFilter.addEventListener('change', filterCountries);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

displayCountries(countries);
 