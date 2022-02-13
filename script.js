function onWidescreenSaveClick() {
    domtoimage
        .toPng(document.getElementById("wide-container"), {
            quality: 0.95
        })
        .then(function(dataUrl) {
            var link = document.createElement("a");
            link.download = "matchup-16x9.png";
            link.href = dataUrl;
            link.click();
        });
}


function onDropdownAChange() {
    var x = document.getElementById("teamA").value;
    // document.getElementById("cityA").innerText = NFL_TEAMS[(+(x) - 1)].cityName.toUpperCase();
    // document.getElementById("nicknameA").innerText = NFL_TEAMS[(+(x) - 1)].nickname.toUpperCase();
    // document.getElementById("logoA").innerHTML = '<img src="' + NFL_TEAMS[(+(x) - 1)].logo + '"></img>';
    document.getElementById("wideLogoA").innerHTML = '<img src="' + NFL_TEAMS[(+(x) - 1)].wideLogo + '"></img>';
}

function onDropdownBChange() {
    var x = document.getElementById("teamB").value;
    // document.getElementById("cityB").innerText = NFL_TEAMS[(+(x) - 1)].cityName.toUpperCase();
    // document.getElementById("nicknameB").innerText = NFL_TEAMS[(+(x) - 1)].nickname.toUpperCase();
    // document.getElementById("logoB").innerHTML = '<img src="' + NFL_TEAMS[(+(x) - 1)].logo + '"></img>'
    document.getElementById("wideLogoB").innerHTML = '<img src="' + NFL_TEAMS[(+(x) - 1)].wideLogo + '"></img>';
    // document.getElementById("stadium").innerText = NFL_TEAMS[(+(x) - 1)].stadium.toUpperCase();
    // document.getElementById("stadium-city").innerText = NFL_TEAMS[(+(x) - 1)].stadiumLocation.toUpperCase();
}

function onWeekChange() {
    var x = document.getElementById("weekSelector").value;
    document.getElementById("week").innerText = x.toUpperCase();
}

function onCityChange() {
    var x = document.getElementById("citySelector").value;
    document.getElementById("stadium-city").innerText = x.toUpperCase();
}

function onAwayLogoChange() {
    var x = document.getElementById("old-logo-a").value;
    // document.getElementById("logoA").innerHTML = '<img src="' + OLD_LOGOS[(+(x) - 1)].logo + '"></img>';
    // document.getElementById("cityA").innerText = OLD_LOGOS[(+(x) - 1)].cityName.toUpperCase();
    // document.getElementById("nicknameA").innerText = OLD_LOGOS[(+(x) - 1)].nickname.toUpperCase();
    document.getElementById("wideLogoA").innerHTML = '<img src="' + OLD_LOGOS[(+(x) - 1)].wideLogo + '"></img>';
}

function onHomeLogoChange() {
    var x = document.getElementById("old-logo-b").value;
    // document.getElementById("logoB").innerHTML = '<img src="' + OLD_LOGOS[(+(x) - 1)].logo + '"></img>';
    // document.getElementById("cityB").innerText = OLD_LOGOS[(+(x) - 1)].cityName.toUpperCase();
    // document.getElementById("nicknameB").innerText = OLD_LOGOS[(+(x) - 1)].nickname.toUpperCase();
    // document.getElementById("stadium-city").innerText = OLD_LOGOS[(+(x) - 1)].stadiumLocation.toUpperCase();
    document.getElementById("wideLogoB").innerHTML = '<img src="' + OLD_LOGOS[(+(x) - 1)].wideLogo + '"></img>';

}


const OLD_LOGOS = [{
        id: 1,
        logo: './nfl/old/49ers.1968-1995.png',
        wideLogo: './nfl/8x9/old/49ers.1968-1995.png',
        cityName: 'San Francisco',
        nickname: '49ers',
        stadiumLocation: "San Francisco, California"
    }, {
        id: 2,
        logo: './nfl/old/49ers.1996-2008.png',
        wideLogo: './nfl/8x9/old/49ers.1996-2008.png',
        cityName: 'San Francisco',
        nickname: '49ers',
        stadiumLocation: "San Francisco, California"
    }, {
        id: 3,
        logo: './nfl/old/afc.1970-2009.png',
        wideLogo: './nfl/8x9/old/afc.1970-2009.png',
        cityName: '',
        nickname: 'AFC',
        stadiumLocation: "Honolulu, Hawaii"
    }, {
        id: 4,
        logo: './nfl/old/bears.1962-1973.png',
        wideLogo: './nfl/8x9/old/bears.1962-1973.png',
        cityName: "Chicago",
        nickname: "Bears",
        stadiumLocation: "Chicago, Illinois"
    }, {
        id: 5,
        logo: './nfl/old/bengals.1981-1986.png',
        wideLogo: './nfl/8x9/old/bengals.1981-1986.png',
        cityName: "Cincinnati",
        nickname: "Bengals",
        stadiumLocation: "Cincinnati, Ohio"
    }, {
        id: 6,
        logo: './nfl/old/bengals.1987-1996.png',
        wideLogo: './nfl/8x9/old/bengals.1987-1996.png',
        cityName: "Cincinnati",
        nickname: "Bengals",
        stadiumLocation: "Cincinnati, Ohio"
    }, {
        id: 7,
        logo: './nfl/old/bengals.1997-2001.png',
        wideLogo: './nfl/8x9/old/bengals.1997-2001.png',
        cityName: "Cincinnati",
        nickname: "Bengals",
        stadiumLocation: "Cincinnati, Ohio"
    }, {
        id: 8,
        logo: './nfl/old/bengals.2002-2003.png',
        wideLogo: './nfl/8x9/old/bengals.2002-2003.png',
        cityName: "Cincinnati",
        nickname: "Bengals",
        stadiumLocation: "Cincinnati, Ohio"
    }, {
        id: 9,
        logo: './nfl/old/bills.1970-1973.png',
        wideLogo: './nfl/8x9/old/bills.1970-1973.png',
        cityName: "Buffalo",
        nickname: "Bills",
        stadiumLocation: "Buffalo, New York"
    }, {
        id: 10,
        logo: './nfl/old/broncos.1962-1969.png',
        wideLogo: './nfl/8x9/old/broncos.1962-1969.png',
        cityName: "Denver",
        nickname: "Broncos",
        stadiumLocation: "Denver, Colorado"
    }, {
        id: 11,
        logo: './nfl/old/broncos.1970-1992.png',
        wideLogo: './nfl/8x9/old/broncos.1970-1992.png',
        cityName: "Denver",
        nickname: "Broncos",
        stadiumLocation: "Denver, Colorado"
    }, {
        id: 12,
        logo: './nfl/old/broncos.1993-1996.png',
        wideLogo: './nfl/8x9/old/broncos.1993-1996.png',
        cityName: "Denver",
        nickname: "Broncos",
        stadiumLocation: "Denver, Colorado"
    }, {
        id: 13,
        logo: './nfl/old/browns.1959-1969.png',
        wideLogo: './nfl/8x9/old/browns.1959-1969.png',
        cityName: "Cleveland",
        nickname: "Browns",
        stadiumLocation: "Cleveland, Ohio"
    }, {
        id: 14,
        logo: './nfl/old/browns.1970-1985.png',
        wideLogo: './nfl/8x9/old/browns.1970-1985.png',
        cityName: "Cleveland",
        nickname: "Browns",
        stadiumLocation: "Cleveland, Ohio"
    }, {
        id: 15,
        logo: './nfl/old/browns.1986-1991.png',
        wideLogo: './nfl/8x9/old/browns.1986-1991.png',
        cityName: "Cleveland",
        nickname: "Browns",
        stadiumLocation: "Cleveland, Ohio"
    }, {
        id: 16,
        logo: './nfl/old/browns.1992-1995.png',
        wideLogo: './nfl/8x9/old/browns.1992-1995.png',
        cityName: "Cleveland",
        nickname: "Browns",
        stadiumLocation: "Cleveland, Ohio"
    }, {
        id: 17,
        logo: './nfl/old/browns.1999-2005.png',
        wideLogo: './nfl/8x9/old/browns.1999-2005.png',
        cityName: "Cleveland",
        nickname: "Browns",
        stadiumLocation: "Cleveland, Ohio"
    }, {
        id: 18,
        logo: './nfl/old/browns.2006-2014.png',
        wideLogo: './nfl/8x9/old/browns.2006-2014.png',
        cityName: "Cleveland",
        nickname: "Browns",
        stadiumLocation: "Cleveland, Ohio"
    }, {
        id: 19,
        logo: './nfl/old/buccaneers.1976-1996.png',
        wideLogo: './nfl/8x9/old/buccaneers.1976-1996.png',
        cityName: "Tampa Bay",
        nickname: "Buccaneers",
        stadiumLocation: "Tampa, Florida"
    }, {
        id: 20,
        logo: './nfl/old/buccaneers.1997-2013.png',
        wideLogo: './nfl/8x9/old/buccaneers.1997-2013.png',
        cityName: "Tampa Bay",
        nickname: "Buccaneers",
        stadiumLocation: "Tampa, Florida"
    }, {
        id: 21,
        logo: './nfl/old/buccaneers.2014-2019.png',
        wideLogo: './nfl/8x9/old/buccaneers.2014-2019.png',
        cityName: "Tampa Bay",
        nickname: "Buccaneers",
        stadiumLocation: "Tampa, Florida"
    }, {
        id: 22,
        logo: './nfl/old/cardinals.1970-2004.png',
        wideLogo: './nfl/8x9/old/cardinals.1970-2004.png',
        cityName: 'St. Louis',
        nickname: 'Cardinals',
        stadiumLocation: "St. Louis, Missouri"
    }, {
        id: 23,
        logo: './nfl/old/chargers.1961-1973.png',
        wideLogo: './nfl/8x9/old/chargers.1961-1973.png',
        cityName: 'San Diego',
        nickname: 'Chargers',
        stadiumLocation: "San Diego, California"
    }, {
        id: 24,
        logo: './nfl/old/chargers.1974-1987.png',
        wideLogo: './nfl/8x9/old/chargers.1974-1987.png',
        cityName: 'San Diego',
        nickname: 'Chargers',
        stadiumLocation: "San Diego, California"
    }, {
        id: 25,
        logo: './nfl/old/chargers.1988-2001.png',
        wideLogo: './nfl/8x9/old/chargers.1988-2001.png',
        cityName: 'San Diego',
        nickname: 'Chargers',
        stadiumLocation: "San Diego, California"
    }, {
        id: 26,
        logo: './nfl/old/chargers.2002-2006.png',
        wideLogo: './nfl/8x9/old/chargers.2002-2006.png',
        cityName: 'San Diego',
        nickname: 'Chargers',
        stadiumLocation: "San Diego, California"
    }, {
        id: 27,
        logo: './nfl/old/chargers.2007-2016.png',
        wideLogo: './nfl/8x9/old/chargers.2007-2016.png',
        cityName: 'San Diego',
        nickname: 'Chargers',
        stadiumLocation: "San Diego, California"
    }, {
        id: 28,
        logo: './nfl/old/chargers.2017-2019.png',
        wideLogo: './nfl/8x9/old/chargers.2017-2019.png',
        cityName: 'Los Angeles',
        nickname: 'Chargers',
        stadiumLocation: "Carson, California"
    }, {
        id: 29,
        logo: './nfl/old/chiefs.1963-1971.png',
        wideLogo: './nfl/8x9/old/chiefs.1963-1971.png',
        cityName: 'Kansas City',
        nickname: 'Chiefs',
        stadiumLocation: "Kansas City, Missouri"
    }, {
        id: 30,
        logo: './nfl/old/colts.1953-1960.png',
        wideLogo: './nfl/8x9/old/colts.1953-1960.png',
        cityName: 'Baltimore',
        nickname: 'Colts',
        stadiumLocation: "Baltimore, Maryland"
    }, {
        id: 31,
        logo: './nfl/old/colts.1961-1978.png',
        wideLogo: './nfl/8x9/old/colts.1961-1978.png',
        cityName: 'Baltimore',
        nickname: 'Colts',
        stadiumLocation: "Baltimore, Maryland"
    }, {
        id: 32,
        logo: './nfl/old/colts.1979-2001.png',
        wideLogo: './nfl/8x9/old/colts.1979-2001.png',
        cityName: 'Baltimore',
        nickname: 'Colts',
        stadiumLocation: "Baltimore, Maryland"
    }, {
        id: 33,
        logo: './nfl/old/cowboys.1960-1963.png',
        wideLogo: './nfl/8x9/old/cowboys.1960-1963.png',
        cityName: 'Dallas',
        nickname: 'Cowboys',
        stadiumLocation: "Dallas, Texas"
    }, {
        id: 34,
        logo: './nfl/old/dolphins.1966-1973.png',
        wideLogo: './nfl/8x9/old/dolphins.1966-1973.png',
        cityName: 'Miami',
        nickname: 'Dolphins',
        stadiumLocation: "Miami, Florida"
    }, {
        id: 35,
        logo: './nfl/old/dolphins.1974-1989.png',
        wideLogo: './nfl/8x9/old/dolphins.1974-1989.png',
        cityName: 'Miami',
        nickname: 'Dolphins',
        stadiumLocation: "Miami, Florida"
    }, {
        id: 36,
        logo: './nfl/old/dolphins.1997-2012.png',
        wideLogo: './nfl/8x9/old/dolphins.1997-2012.png',
        cityName: 'Miami',
        nickname: 'Dolphins',
        stadiumLocation: "Miami, Florida"
    }, {
        id: 37,
        logo: './nfl/old/dolphins.2013-2017.png',
        wideLogo: './nfl/8x9/old/dolphins.2013-2017.png',
        cityName: 'Miami',
        nickname: 'Dolphins',
        stadiumLocation: "Miami, Florida"
    }, {
        id: 38,
        logo: './nfl/old/eagles.1948-1968.png',
        wideLogo: './nfl/8x9/old/eagles.1948-1968.png',
        cityName: 'Philadelphia',
        nickname: 'Eagles',
        stadiumLocation: "Philadelphia, Pennsylvania"
    }, {
        id: 39,
        logo: './nfl/old/eagles.1969-1972.png',
        wideLogo: './nfl/8x9/old/eagles.1969-1972.png',
        cityName: 'Philadelphia',
        nickname: 'Eagles',
        stadiumLocation: "Philadelphia, Pennsylvania"
    }, {
        id: 40,
        logo: './nfl/old/eagles.1973-1986.png',
        wideLogo: './nfl/8x9/old/eagles.1973-1986.png',
        cityName: 'Philadelphia',
        nickname: 'Eagles',
        stadiumLocation: "Philadelphia, Pennsylvania"
    }, {
        id: 41,
        logo: './nfl/old/eagles.1987-1995.png',
        wideLogo: './nfl/8x9/old/eagles.1987-1995.png',
        cityName: 'Philadelphia',
        nickname: 'Eagles',
        stadiumLocation: "Philadelphia, Pennsylvania"
    }, {
        id: 42,
        logo: './nfl/old/falcons.1966-1989.png',
        wideLogo: './nfl/8x9/old/falcons.1966-1989.png',
        cityName: 'Atlanta',
        nickname: 'Falcons',
        stadiumLocation: "Atlanta, Georgia"
    }, {
        id: 43,
        logo: './nfl/old/falcons.1990-2002.png',
        wideLogo: './nfl/8x9/old/falcons.1990-2002.png',
        cityName: 'Atlanta',
        nickname: 'Falcons',
        stadiumLocation: "Atlanta, Georgia"
    }, {
        id: 44,
        logo: './nfl/old/giants.1961-1974.png',
        wideLogo: './nfl/8x9/old/giants.1961-1974.png',
        cityName: 'New York',
        nickname: 'Giants',
        stadiumLocation: "New York, New York"
    }, {
        id: 45,
        logo: './nfl/old/giants.1975.png',
        wideLogo: './nfl/8x9/old/giants.1975.png',
        cityName: 'New York',
        nickname: 'Giants',
        stadiumLocation: "New York, New York"
    }, {
        id: 46,
        logo: './nfl/old/giants.1976-1999.png',
        wideLogo: './nfl/8x9/old/giants.1976-1999.png',
        cityName: 'New York',
        nickname: 'Giants',
        stadiumLocation: "East Rutherford, New Jersey"
    }, {
        id: 47,
        logo: './nfl/old/jaguars.1995-2001.png',
        wideLogo: './nfl/8x9/old/jaguars.1995-2001.png',
        cityName: 'Jacksonville',
        nickname: 'Jaguars',
        stadiumLocation: "Jacksonville, Florida"
    }, {
        id: 48,
        logo: './nfl/old/jaguars.2002-2012.png',
        wideLogo: './nfl/8x9/old/jaguars.2002-2012.png',
        cityName: 'Jacksonville',
        nickname: 'Jaguars',
        stadiumLocation: "Jacksonville, Florida"
    }, {
        id: 49,
        logo: './nfl/old/jets.1963.png',
        wideLogo: './nfl/8x9/old/jets.1963.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'New York, New York'
    }, {
        id: 50,
        logo: './nfl/old/jets.1964-1966.png',
        wideLogo: './nfl/8x9/old/jets.1964-1966.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'New York, New York'
    }, {
        id: 51,
        logo: './nfl/old/jets.1967-1969.png',
        wideLogo: './nfl/8x9/old/jets.1967-1969.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'New York, New York'
    }, {
        id: 52,
        logo: './nfl/old/jets.1970-1977.png',
        wideLogo: './nfl/8x9/old/jets.1970-1977.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'New York, New York'
    }, {
        id: 53,
        logo: './nfl/old/jets.1978-1997.png',
        wideLogo: './nfl/8x9/old/jets.1978-1997.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'New York, New York'
    }, {
        id: 54,
        logo: './nfl/old/jets.1998-2018.png',
        wideLogo: './nfl/8x9/old/jets.1998-2018.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'East Rutherford, New Jersey'
    }, {
        id: 55,
        logo: './nfl/old/lions.1961-1969.png',
        wideLogo: './nfl/8x9/old/lions.1961-1969.png',
        cityName: 'Detroit',
        nickname: 'Lions',
        stadiumLocation: "Detroit, Michigan"
    }, {
        id: 56,
        logo: './nfl/old/lions.1970-2002.png',
        wideLogo: './nfl/8x9/old/lions.1970-2002.png',
        cityName: 'Detroit',
        nickname: 'Lions',
        stadiumLocation: "Pontiac, Michigan"
    }, {
        id: 57,
        logo: './nfl/old/lions.2003-2008.png',
        wideLogo: './nfl/8x9/old/lions.2003-2008.png',
        cityName: 'Detroit',
        nickname: 'Lions',
        stadiumLocation: "Detroit, Michigan"
    }, {
        id: 58,
        logo: './nfl/old/lions.2009-2016.png',
        wideLogo: './nfl/8x9/old/lions.2009-2016.png',
        cityName: 'Detroit',
        nickname: 'Lions',
        stadiumLocation: "Detroit, Michigan"
    }, {
        id: 59,
        logo: './nfl/old/nfc.1970-2009.png',
        wideLogo: './nfl/8x9/old/nfc.1970-2009.png',
        cityName: '',
        nickname: 'NFC',
        stadiumLocation: 'Honolulu, Hawaii'
    }, {
        id: 60,
        logo: './nfl/old/nytitans.1960-1962.png',
        wideLogo: './nfl/8x9/old/nytitans.1960-1962.png',
        cityName: 'New York',
        nickname: 'Titans',
        stadiumLocation: 'New York, New York'
    }, {
        id: 61,
        logo: './nfl/old/oilers.1961-1968.png',
        wideLogo: './nfl/8x9/old/oilers.1961-1968.png',
        cityName: 'Houston',
        nickname: 'Oilers',
        stadiumLocation: "Houston, Texas"
    }, {
        id: 62,
        logo: './nfl/old/oilers.1969-1971.png',
        wideLogo: './nfl/8x9/old/oilers.1969-1971.png',
        cityName: 'Houston',
        nickname: 'Oilers',
        stadiumLocation: "Houston, Texas"
    }, {
        id: 63,
        logo: './nfl/old/oilers.1972-1979.png',
        wideLogo: './nfl/8x9/old/oilers.1972-1979.png',
        cityName: 'Houston',
        nickname: 'Oilers',
        stadiumLocation: "Houston, Texas"
    }, {
        id: 64,
        logo: './nfl/old/packers.1961-1979.png',
        wideLogo: './nfl/8x9/old/packers.1961-1979.png',
        cityName: 'Green Bay',
        nickname: 'Packers',
        stadiumLocation: "Green Bay, Wisconsin"
    }, {
        id: 65,
        logo: './nfl/old/panthers.1995-2011.png',
        wideLogo: './nfl/8x9/old/panthers.1995-2011.png',
        cityName: 'Carolina',
        nickname: 'Panthers',
        stadiumLocation: "Charlotte, North Carolina"
    }, {
        id: 66,
        logo: './nfl/old/patriot.1989-1992.png',
        wideLogo: './nfl/8x9/old/patriots.1989-1992.png',
        cityName: 'New England',
        nickname: 'Patriots',
        stadiumLocation: "Foxborough, Massachusetts"
    }, {
        id: 67,
        logo: './nfl/old/patriots.1960-1971.png',
        wideLogo: './nfl/8x9/old/patriots.1960-1971.png',
        cityName: 'Boston',
        nickname: 'Patriots',
        stadiumLocation: "Boston, Massachusetts"
    }, {
        id: 68,
        logo: './nfl/old/patriots.1972-1988.png',
        wideLogo: './nfl/8x9/old/patriots.1972.1988.png',
        cityName: 'New England',
        nickname: 'Patriots',
        stadiumLocation: "Foxborough, Massachusetts"
    }, {
        id: 69,
        logo: './nfl/old/patriots.1993-1999.png',
        wideLogo: './nfl/8x9/old/patriots.1993-1999.png',
        cityName: 'New England',
        nickname: 'Patriots',
        stadiumLocation: "Foxborough, Massachusetts"
    }, {
        id: 70,
        logo: './nfl/old/raiders.1960-1962.png',
        wideLogo: './nfl/8x9/old/raiders.1960-1962.png',
        cityName: 'Oakland',
        nickname: 'Raiders',
        stadiumLocation: "Oakland, California"
    }, {
        id: 71,
        logo: './nfl/old/raiders.1963.png',
        wideLogo: './nfl/8x9/old/raiders.1963.png',
        cityName: 'Oakland',
        nickname: 'Raiders',
        stadiumLocation: "Oakland, California"
    }, {
        id: 72,
        logo: './nfl/old/raiders.1964-1981.png',
        wideLogo: './nfl/8x9/old/raiders.1964-1981.png',
        cityName: 'Oakland',
        nickname: 'Raiders',
        stadiumLocation: "Oakland, California"
    }, {
        id: 73,
        logo: './nfl/old/rams.1948-1965.png',
        wideLogo: './nfl/8x9/old/rams.1948-1965.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Los Angeles, California"
    }, {
        id: 74,
        logo: './nfl/old/rams.1966-1982.png',
        wideLogo: './nfl/8x9/old/rams.1966-1982.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Los Angeles, California"
    }, {
        id: 75,
        logo: './nfl/old/rams.1983-1988.png',
        wideLogo: './nfl/8x9/old/rams.1983-1988.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Anaheim, California"
    }, {
        id: 76,
        logo: './nfl/old/rams.1989-1994.png',
        wideLogo: './nfl/8x9/old/rams.1989-1994.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Anaheim, California"
    }, {
        id: 77,
        logo: './nfl/old/rams.1995-1999.png',
        wideLogo: './nfl/8x9/old/rams.1995-1999.png',
        cityName: 'St. Louis',
        nickname: 'Rams',
        stadiumLocation: "St. Louis, Missouri"
    }, {
        id: 78,
        logo: './nfl/old/rams.2000-2015.png',
        wideLogo: './nfl/8x9/old/rams.2000-2015.png',
        cityName: 'St. Louis',
        nickname: 'Rams',
        stadiumLocation: "St. Louis, Missouri"
    }, {
        id: 79,
        logo: './nfl/old/rams.2016.png',
        wideLogo: './nfl/8x9/old/rams.2016.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Los Angeles, California"
    }, {
        id: 80,
        logo: './nfl/old/rams.2017-2019.png',
        wideLogo: './nfl/8x9/old/rams.2017-2019.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Los Angeles, California"
    }, {
        id: 81,
        logo: './nfl/old/ravens.1996-1998.png',
        wideLogo: './nfl/8x9/old/ravens.1996-1998.png',
        cityName: 'Baltimore',
        nickname: 'Ravens',
        stadiumLocation: "Baltimore, Maryland"
    }, {
        id: 82,
        logo: './nfl/old/redskins.1965-1969.png',
        wideLogo: './nfl/8x9/old/redskins.1965-1969.png',
        cityName: 'Washington',
        nickname: 'Redskins',
        stadiumLocation: "Washington, D.C."
    }, {
        id: 83,
        logo: './nfl/old/redskins.1970-1971.png',
        wideLogo: './nfl/8x9/old/redskins.1970-1971.png',
        cityName: 'Washington',
        nickname: 'Redskins',
        stadiumLocation: "Washington, D.C."
    }, {
        id: 84,
        logo: './nfl/old/redskins.1972-1981.png',
        wideLogo: './nfl/8x9/old/redskins.1972-1981.png',
        cityName: 'Washington',
        nickname: 'Redskins',
        stadiumLocation: "Washington, D.C."
    }, {
        id: 85,
        logo: './nfl/old/redskins.1982.png',
        wideLogo: './nfl/8x9/old/redskins.1982.png',
        cityName: 'Washington',
        nickname: 'Redskins',
        stadiumLocation: "Washington, D.C."
    }, {
        id: 86,
        logo: './nfl/old/saints.1967-1999.png',
        wideLogo: './nfl/8x9/old/saints.1967-1999.png',
        cityName: 'New Orleans',
        nickname: 'Saints',
        stadiumLocation: "New Orleans, Louisiana"
    }, {
        id: 87,
        logo: './nfl/old/saints.2000-2001.png',
        wideLogo: './nfl/8x9/old/saints.2000-2001.png',
        cityName: 'New Orleans',
        nickname: 'Saints',
        stadiumLocation: "New Orleans, Louisiana"
    }, {
        id: 88,
        logo: './nfl/old/saints.2002-2011.png',
        wideLogo: './nfl/8x9/old/saints.2002-2011.png',
        cityName: 'New Orleans',
        nickname: 'Saints',
        stadiumLocation: "New Orleans, Louisiana"
    }, {
        id: 89,
        logo: './nfl/old/saints.2012-2016.png',
        wideLogo: './nfl/8x9/old/saints.2012-2016.png',
        cityName: 'New Orleans',
        nickname: 'Saints',
        stadiumLocation: "New Orleans, Louisiana"
    }, {
        id: 90,
        logo: './nfl/old/seahawks.1976-2001.png',
        wideLogo: './nfl/8x9/old/seahawks.1976-2001.png',
        cityName: 'Seattle',
        nickname: 'Seahawks',
        stadiumLocation: "Seattle, Washington"
    }, {
        id: 91,
        logo: './nfl/old/seahawks.2002-2011.png',
        wideLogo: './nfl/8x9/old/seahawks.2002-2011.png',
        cityName: 'Seattle',
        nickname: 'Seahawks',
        stadiumLocation: "Seattle, Washington"
    }, {
        id: 92,
        logo: './nfl/old/steelers.1962-1968.png',
        wideLogo: './nfl/8x9/old/steelers.1962-1968.png',
        cityName: 'Pittsburgh',
        nickname: 'Steelers',
        stadiumLocation: "Pittsburgh, Pennsylvania"
    }, {
        id: 93,
        logo: './nfl/old/texans.1960-1962.png',
        wideLogo: './nfl/8x9/old/texans.1960-1962.png',
        cityName: 'Dallas',
        nickname: 'Texans',
        stadiumLocation: "Dallas, Texas"
    }, {
        id: 94,
        logo: './nfl/old/vikings.1966-1996.png',
        wideLogo: './nfl/8x9/old/vikings.1966-1996.png',
        cityName: 'Minnesota',
        nickname: 'Vikings',
        stadiumLocation: "Minneapolis, Minnesota"
    }, {
        id: 95,
        logo: './nfl/old/vikings.1997-2001.png',
        wideLogo: './nfl/8x9/old/vikings.1997-2001.png',
        cityName: 'Minnesota',
        nickname: 'Vikings',
        stadiumLocation: "Minneapolis, Minnesota"
    }, {
        id: 96,
        logo: './nfl/old/vikings.2002-2009.png',
        wideLogo: './nfl/8x9/old/vikings.2002-2009.png',
        cityName: 'Minnesota',
        nickname: 'Vikings',
        stadiumLocation: "Minneapolis, Minnesota"
    }, {
        id: 97,
        logo: './nfl/old/vikings.2010-2012.png',
        wideLogo: './nfl/8x9/old/vikings.2010-2012.png',
        cityName: 'Minnesota',
        nickname: 'Vikings',
        stadiumLocation: "Minneapolis, Minnesota"
    }, {
        id: 98,
        logo: './nfl/old/cardinals.1970-2004.png',
        wideLogo: './nfl/8x9/old/cardinals.1970-2004.png',
        cityName: 'Phoenix',
        nickname: 'Cardinals',
        stadiumLocation: "Tempe, Arizona"
    }, {
        id: 99,
        logo: './nfl/old/cardinals.1970-2004.png',
        wideLogo: './nfl/8x9/old/cardinals.1970-2004.png',
        cityName: 'Arizona',
        nickname: 'Cardinals',
        stadiumLocation: "Glendale, Arizona"
    }, {
        id: 100,
        logo: './nfl/old/colts.1979-2001.png',
        wideLogo: './nfl/8x9/old/colts.1979-2001.png',
        cityName: 'Indianapolis',
        nickname: 'Colts',
        stadiumLocation: "Indianapolis, Indiana"
    }, {
        id: 101,
        logo: './nfl/oilers.png',
        wideLogo: './nfl/8x9/oilers.png',
        cityName: 'Houston',
        nickname: 'Oilers',
        stadiumLocation: "Houston, Texas"
    }, {
        id: 102,
        logo: './nfl/oilers.png',
        wideLogo: './nfl/8x9/oilers.png',
        cityName: 'Tennessee',
        nickname: 'Oilers',
        stadiumLocation: "Memphis, Tennessee"
    }, {
        id: 103,
        logo: './nfl/old/patriots.1960-1971.png',
        wideLogo: './nfl/8x9/old/patriots.1960-1971.png',
        cityName: 'New England',
        nickname: 'Patriots',
        stadiumLocation: "Boston, Massachusetts"
    }, {
        id: 104,
        logo: './nfl/old/raiders.1964-1981.png',
        wideLogo: './nfl/8x9/old/raiders.1964-1981.png',
        cityName: 'Los Angeles',
        nickname: 'Raiders',
        stadiumLocation: "Los Angeles, California"
    }, {
        id: 105,
        logo: './nfl/old/raiders.1964-1981.png',
        wideLogo: './nfl/8x9/old/raiders.1964-1981.png',
        cityName: 'Oakland',
        nickname: 'Raiders',
        stadiumLocation: "Oakland, California"
    }, {
        id: 106,
        logo: './nfl/old/bills.1970-1973.png',
        wideLogo: './nfl/8x9/old/bills.1970-1973.png',
        cityName: "Buffalo",
        nickname: "Bills",
        stadiumLocation: "Orchard Park, New York"
    }, {
        id: 107,
        logo: './nfl/old/dolphins.1989-1996.png',
        wideLogo: './nfl/8x9/old/dolphins.1989-1996.png',
        cityName: 'Miami',
        nickname: 'Dolphins',
        stadiumLocation: 'Miami Gardens, Florida'
    }, {
        id: 108,
        logo: './nfl/old/dolphins.1989-1996.png',
        wideLogo: './nfl/8x9/old/dolphins.1989-1996.png',
        cityName: 'Miami',
        nickname: 'Dolphins',
        stadiumLocation: 'Miami, Florida'
    }, {
        id: 109,
        logo: './nfl/old/patriots.1960-1971.png',
        wideLogo: './nfl/8x9/old/patriots.1960-1971.png',
        cityName: 'Boston',
        nickname: 'Patriots',
        stadiumLocation: 'Chestnut Hill, Massachusetts'
    }, {
        id: 110,
        logo: './nfl/old/patriots.1960-1971.png',
        wideLogo: './nfl/8x9/old/patriots.1960-1971.png',
        cityName: 'Boston',
        nickname: 'Patriots',
        stadiumLocation: 'Boston, Massachusetts'
    }, {
        id: 111,
        logo: './nfl/old/jets.1978-1997.png',
        wideLogo: './nfl/8x9/old/jets.1978-1997.png',
        cityName: 'New York',
        nickname: 'Jets',
        stadiumLocation: 'East Rutherford, New Jersey'
    }, {
        id: 112,
        logo: './nfl/oilers.png',
        wideLogo: './nfl/8x9/oilers.png',
        cityName: 'Tennessee',
        nickname: 'Oilers',
        stadiumLocation: "Nashville, Tennessee"
    }, {
        id: 113,
        logo: './nfl/old/raiders.1960-1962.png',
        wideLogo: './nfl/8x9/old/raiders.1960-1962.png',
        cityName: 'Oakland',
        nickname: 'Raiders',
        stadiumLocation: "San Francisco, California"
    }, {
        id: 114,
        cityName: "Dallas",
        nickname: "Cowboys",
        logo: "./nfl/cowboys.png",
        wideLogo: "./nfl/8x9/cowboys.png",
        stadiumLocation: "Dallas, Texas"
    },
    {
        id: 115,
        cityName: "Dallas",
        nickname: "Cowboys",
        logo: "./nfl/cowboys.png",
        wideLogo: "./nfl/8x9/cowboys.png",
        stadiumLocation: "Irving, Texas"
    }, {
        id: 116,
        logo: './nfl/old/giants.1961-1974.png',
        wideLogo: './nfl/8x9/old/giants.1961-1974.png',
        cityName: 'New York',
        nickname: 'Giants',
        stadiumLocation: "West Haven, Connecticut"
    },
    {
        id: 117,
        logo: './nfl/old/redskins.1972-1981.png',
        wideLogo: './nfl/8x9/old/redskins.1972-1981.png',
        cityName: 'Washington',
        nickname: 'Redskins',
        stadiumLocation: "Washington, D.C."
    },
    {
        id: 118,
        logo: './nfl/old/redskins.1972-1981.png',
        wideLogo: './nfl/8x9/old/redskins.1972-1981.png',
        cityName: 'Washington',
        nickname: 'Redskins',
        stadiumLocation: "Landover, Maryland"
    }, {
        id: 119,
        cityName: "Chicago",
        nickname: "Bears",
        logo: "./nfl/bears.png",
        wideLogo: "./nfl/8x9/bears.png",
        stadiumLocation: "Chicago, Illinois"
    },
    {
        id: 120,
        cityName: "Chicago",
        nickname: "Bears",
        logo: "./nfl/bears.png",
        wideLogo: "./nfl/8x9/bears.png",
        stadiumLocation: "Champaign, Illinois"
    }, {
        id: 121,
        logo: './nfl/old/lions.1970-2002.png',
        wideLogo: './nfl/8x9/old/lions.1970-2002.png',
        cityName: 'Detroit',
        nickname: 'Lions',
        stadiumLocation: "Detroit, Michigan"
    }, {
        id: 122,
        logo: './nfl/old/lions.1970-2002.png',
        wideLogo: './nfl/8x9/old/lions.1970-2002.png',
        cityName: 'Detroit',
        nickname: 'Lions',
        stadiumLocation: "Pontiac, Michigan"
    }, {
        id: 123,
        logo: './nfl/old/vikings.1966-1996.png',
        wideLogo: './nfl/8x9/old/vikings.1966-1996.png',
        cityName: 'Minnesota',
        nickname: 'Vikings',
        stadiumLocation: "Bloomington, Minnesota"
    }, {
        id: 124,
        logo: './nfl/old/panthers.1995-2011.png',
        wideLogo: './nfl/8x9/old/panthers.1995-2011.png',
        cityName: 'Carolina',
        nickname: 'Panthers',
        stadiumLocation: "Clemson, South Carolina"
    }, {
        id: 125,
        logo: './nfl/old/cardinals.1970-2004.png',
        wideLogo: './nfl/8x9/old/cardinals.1970-2004.png',
        cityName: 'Phoenix',
        nickname: 'Cardinals',
        stadiumLocation: "Tempe, Arizona"
    }, {
        id: 126,
        cityName: "Arizona",
        nickname: "Cardinals",
        logo: "./nfl/cardinals.png",
        wideLogo: "./nfl/8x9/cardinals.png",
        stadiumLocation: "Tempe, Arizona"
    }, {
        id: 127,
        logo: './nfl/old/rams.1966-1982.png',
        wideLogo: './nfl/8x9/old/rams.1966-1982.png',
        cityName: 'Los Angeles',
        nickname: 'Rams',
        stadiumLocation: "Anaheim, California"
    }, {
        id: 128,
        logo: './nfl/old/49ers.1996-2008.png',
        wideLogo: './nfl/8x9/old/49ers.1996-2008.png',
        cityName: 'San Francisco',
        nickname: '49ers',
        stadiumLocation: "San Francisco, California"
    }, {
        id: 129,
        logo: './nfl/old/bengals.1970-1980.png',
        wideLogo: './nfl/8x9/old/bengals.1970-1980.png',
        cityName: 'Cincinnati',
        nickname: 'Bengals',
        stadiumLocation: "Cincinnati, Ohio"
    }
]
const NFL_TEAMS = [{
        id: 1,
        fullName: "Arizona Cardinals",
        cityName: "Arizona",
        nickname: "Cardinals",
        logo: "./nfl/cardinals.png",
        wideLogo: "./nfl/8x9/cardinals.png",
        stadium: "State Farm Stadium",
        stadiumLocation: "Glendale, Arizona"
    },
    {
        id: 2,
        fullName: "Atlanta Falcons",
        cityName: "Atlanta",
        nickname: "Falcons",
        logo: "./nfl/falcons.png",
        wideLogo: "./nfl/8x9/falcons.png",
        stadium: "Mercedes-Benz Stadium",
        stadiumLocation: "Atlanta, Georgia"
    },
    {
        id: 3,
        fullName: "Baltimore Colts",
        cityName: "Baltimore",
        nickname: "Colts",
        logo: "./nfl/colts.png",
        wideLogo: "./nfl/8x9/colts.png",
        stadium: "Memorial Stadium",
        stadiumLocation: "Baltimore, Maryland"
    },
    {
        id: 4,
        fullName: "Baltimore Ravens",
        cityName: "Baltimore",
        nickname: "Ravens",
        logo: "./nfl/ravens.png",
        wideLogo: "./nfl/8x9/ravens.png",
        stadium: "M&T Bank Stadium",
        stadiumLocation: "Baltimore, Maryland"
    },
    {
        id: 5,
        fullName: "Buffalo Bills",
        cityName: "Buffalo",
        nickname: "Bills",
        logo: "./nfl/bills.png",
        wideLogo: "./nfl/8x9/bills.png",
        stadium: "Highmark Stadium",
        stadiumLocation: "Orchard Park, New York"
    },
    {
        id: 6,
        fullName: "Carolina Panthers",
        cityName: "Carolina",
        nickname: "Panthers",
        logo: "./nfl/panthers.png",
        wideLogo: "./nfl/8x9/panthers.png",
        stadium: "Bank of America Stadium",
        stadiumLocation: "Charlotte, North Carolina"
    },
    {
        id: 7,
        fullName: "Chicago Bears",
        cityName: "Chicago",
        nickname: "Bears",
        logo: "./nfl/bears.png",
        wideLogo: "./nfl/8x9/bears.png",
        stadium: "Soldier Field",
        stadiumLocation: "Chicago, Illinois"
    },
    {
        id: 8,
        fullName: "Cincinnati Bengals",
        cityName: "Cincinnati",
        nickname: "Bengals",
        logo: "./nfl/bengals.png",
        wideLogo: "./nfl/8x9/bengals.png",
        stadium: "Paul Brown Stadium",
        stadiumLocation: "Cincinnati, Ohio"
    },
    {
        id: 9,
        fullName: "Cleveland Browns",
        cityName: "Cleveland",
        nickname: "Browns",
        logo: "./nfl/browns.png",
        wideLogo: "./nfl/8x9/browns.png",
        stadium: "FirstEnergy Stadium",
        stadiumLocation: "Cleveland, Ohio"
    },
    {
        id: 10,
        fullName: "Dallas Cowboys",
        cityName: "Dallas",
        nickname: "Cowboys",
        logo: "./nfl/cowboys.png",
        wideLogo: "./nfl/8x9/cowboys.png",
        stadium: "AT&T Stadium",
        stadiumLocation: "Arlington, Texas"
    },
    {
        id: 11,
        fullName: "Dallas Texans",
        cityName: "Dallas",
        nickname: "Texans",
        logo: "./nfl/dallas-texans.png",
        wideLogo: "./nfl/8x9/dallas-texans.png",
        stadium: "Cotton Bowl",
        stadiumLocation: "Dallas, Texas"
    },
    {
        id: 12,
        fullName: "Denver Broncos",
        cityName: "Denver",
        nickname: "Broncos",
        logo: "./nfl/broncos.png",
        wideLogo: "./nfl/8x9/broncos.png",
        stadium: "Empower Field at Mile High",
        stadiumLocation: "Denver, Colorado"
    },
    {
        id: 13,
        fullName: "Detroit Lions",
        cityName: "Detroit",
        nickname: "Lions",
        logo: "./nfl/lions.png",
        wideLogo: "./nfl/8x9/lions.png",
        stadium: "Ford Field",
        stadiumLocation: "Detroit, Michigan"
    },
    {
        id: 14,
        fullName: "Green Bay Packers",
        cityName: "Green Bay",
        nickname: "Packers",
        logo: "./nfl/packers.png",
        wideLogo: "./nfl/8x9/packers.png",
        stadium: "Lambeau Field",
        stadiumLocation: "Green Bay, Wisconsin"
    },
    {
        id: 15,
        fullName: "Houston Oilers",
        cityName: "Houston",
        nickname: "Oilers",
        logo: "./nfl/oilers.png",
        wideLogo: "./nfl/8x9/oilers.png",
        stadium: "Astrodome",
        stadiumLocation: "Houston, Texas"
    },
    {
        id: 16,
        fullName: "Houston Texans",
        cityName: "Houston",
        nickname: "Texans",
        logo: "./nfl/texans.png",
        wideLogo: "./nfl/8x9/texans.png",
        stadium: "NRG Stadium",
        stadiumLocation: "Houston, Texas"
    },
    {
        id: 17,
        fullName: "Indianapolis Colts",
        cityName: "Indianapolis",
        nickname: "Colts",
        logo: "./nfl/colts.png",
        wideLogo: "./nfl/8x9/colts.png",
        stadium: "Lucas Oil Stadium",
        stadiumLocation: "Indianapolis, Indiana"
    },
    {
        id: 18,
        fullName: "Jacksonville Jaguars",
        cityName: "Jacksonville",
        nickname: "Jaguars",
        logo: "./nfl/jaguars.png",
        wideLogo: "./nfl/8x9/jaguars.png",
        stadium: "TIAA Bank Field",
        stadiumLocation: "Jacksonville, Florida"
    },
    {
        id: 19,
        fullName: "Kansas City Chiefs",
        cityName: "Kansas City",
        nickname: "Chiefs",
        logo: "./nfl/chiefs.png",
        wideLogo: "./nfl/8x9/chiefs.png",
        stadium: "Arrowhead Stadium",
        stadiumLocation: "Kansas City, Missouri"
    },
    {
        id: 20,
        fullName: "Las Vegas Raiders",
        cityName: "Las Vegas",
        nickname: "Raiders",
        logo: "./nfl/raiders.png",
        wideLogo: "./nfl/8x9/raiders.png",
        stadium: "Allegiant Stadium",
        stadiumLocation: "Paradise, Nevada"
    },
    {
        id: 21,
        fullName: "Los Angeles Chargers",
        cityName: "Los Angeles",
        nickname: "Chargers",
        logo: "./nfl/chargers.png",
        wideLogo: "./nfl/8x9/chargers.png",
        stadium: "SoFi Stadium",
        stadiumLocation: "Inglewood, California"
    },
    {
        id: 22,
        fullName: "Los Angeles Raiders",
        cityName: "Los Angeles",
        nickname: "Raiders",
        logo: "./nfl/raiders.png",
        wideLogo: "./nfl/8x9/raiders.png",
        stadium: "Los Angeles Coliseum",
        stadiumLocation: "Los Angeles, California"
    },
    {
        id: 23,
        fullName: "Los Angeles Rams",
        cityName: "Los Angeles",
        nickname: "Rams",
        logo: "./nfl/rams.png",
        wideLogo: "./nfl/8x9/rams.png",
        stadium: "SoFi Stadium",
        stadiumLocation: "Inglewood, California"
    },
    {
        id: 24,
        fullName: "Miami Dolphins",
        cityName: "Miami",
        nickname: "Dolphins",
        logo: "./nfl/dolphins.png",
        wideLogo: "./nfl/8x9/dolphins.png",
        stadium: "Hard Rock Stadium",
        stadiumLocation: "Miami Gardens, Florida"
    },
    {
        id: 25,
        fullName: "Minnesota Vikings",
        cityName: "Minnesota",
        nickname: "Vikings",
        logo: "./nfl/vikings.png",
        wideLogo: "./nfl/8x9/vikings.png",
        stadium: "U.S. Bank Stadium",
        stadiumLocation: "Minneapolis, Minnesota"
    },
    {
        id: 26,
        fullName: "New England Patriots",
        cityName: "New England",
        nickname: "Patriots",
        logo: "./nfl/patriots.png",
        wideLogo: "./nfl/8x9/patriots.png",
        stadium: "Gillette Stadium",
        stadiumLocation: "Foxborough, Massachusetts"
    },
    {
        id: 27,
        fullName: "New Orleans Saints",
        cityName: "New Orleans",
        nickname: "Saints",
        logo: "./nfl/saints.png",
        wideLogo: "./nfl/8x9/saints.png",
        stadium: "Caesars Superdome",
        stadiumLocation: "New Orleans, Louisiana"
    },
    {
        id: 28,
        fullName: "New York Giants",
        cityName: "New York",
        nickname: "Giants",
        logo: "./nfl/giants.png",
        wideLogo: "./nfl/8x9/giants.png",
        stadium: "MetLife Stadium",
        stadium: "East Rutherford, New Jersey"
    },
    {
        id: 29,
        fullName: "New York Jets",
        cityName: "New York",
        nickname: "Jets",
        logo: "./nfl/jets.png",
        wideLogo: "./nfl/8x9/jets.png",
        stadium: "MetLife Stadium",
        stadium: "East Rutherford, New Jersey"
    },
    {
        id: 30,
        fullName: "Oakland Raiders",
        cityName: "Oakland",
        nickname: "Raiders",
        logo: "./nfl/raiders.png",
        wideLogo: "./nfl/8x9/raiders.png",
        stadium: "RingCentral Coliseum",
        stadiumLocation: "Oakland, California"
    },
    {
        id: 31,
        fullName: "Philadelphia Eagles",
        cityName: "Philadelphia",
        nickname: "Eagles",
        logo: "./nfl/eagles.png",
        wideLogo: "./nfl/8x9/eagles.png",
        stadium: "Lincoln Financial Field",
        stadiumLocation: "Philadelphia, Pennsylvania"
    },
    {
        id: 32,
        fullName: "Phoenix Cardinals",
        cityName: "Phoenix",
        nickname: "Cardinals",
        logo: "./nfl/cardinals.png",
        wideLogo: "./nfl/8x9/cardinals.png",
        stadium: "Sun Devil Stadium",
        stadiumLocation: "Tempe, Arizona"
    },
    {
        id: 33,
        fullName: "Pittsburgh Steelers",
        cityName: "Pittsburgh",
        nickname: "Steelers",
        logo: "./nfl/steelers.png",
        wideLogo: "./nfl/8x9/steelers.png",
        stadium: "Heinz Field",
        stadiumLocation: "Pittsburgh, Pennsylvania"
    },
    {
        id: 34,
        fullName: "San Diego Chargers",
        cityName: "San Diego",
        nickname: "Chargers",
        logo: "./nfl/chargers.png",
        wideLogo: "./nfl/8x9/chargers.png",
        stadium: "SDCCU Stadium",
        stadiumLocation: "San Diego, California"
    },
    {
        id: 35,
        fullName: "San Francisco 49ers",
        cityName: "San Francisco",
        nickname: "49ers",
        logo: "./nfl/49ers.png",
        wideLogo: "./nfl/8x9/49ers.png",
        stadium: "Levi's Stadium",
        stadiumLocation: "Santa Clara, California"
    },
    {
        id: 36,
        fullName: "Seattle Seahawks",
        cityName: "Seattle",
        nickname: "Seahawks",
        logo: "./nfl/seahawks.png",
        wideLogo: "./nfl/8x9/seahawks.png",
        stadium: "Lumen Field",
        stadiumLocation: "Seattle, Washington"
    },
    {
        id: 37,
        fullName: "St. Louis Cardinals",
        cityName: "St. Louis",
        nickname: "Cardinals",
        logo: "./nfl/cardinals.png",
        wideLogo: "./nfl/8x9/cardinals.png",
        stadium: "Busch Stadium",
        stadiumLocation: "St. Louis, Missouri"
    },
    {
        id: 38,
        fullName: "St. Louis Rams",
        cityName: "St. Louis",
        nickname: "Rams",
        logo: "./nfl/rams.png",
        wideLogo: "./nfl/8x9/rams.png",
        stadium: "Edward Jones Dome",
        stadiumLocation: "St. Louis, Missouri"
    },
    {
        id: 39,
        fullName: "Tampa Bay Buccaneers",
        cityName: "Tampa Bay",
        nickname: "Buccaneers",
        logo: "./nfl/buccaneers.png",
        wideLogo: "./nfl/8x9/buccaneers.png",
        stadium: "Raymond James Stadium",
        stadiumLocation: "Tampa, Florida"
    },
    {
        id: 40,
        fullName: "Tennessee Oilers",
        cityName: "Tennessee",
        nickname: "Oilers",
        logo: "./nfl/oilers.png",
        wideLogo: "./nfl/8x9/oilers.png",
        stadium: "Vanderbilt Stadium",
        stadiumLocation: "Nashville, Tennessee"
    },
    {
        id: 41,
        fullName: "Tennessee Titans",
        cityName: "Tennessee",
        nickname: "Titans",
        logo: "./nfl/titans.png",
        wideLogo: "./nfl/8x9/titans.png",
        stadium: "Nissan Stadium",
        stadiumLocation: "Nashville, Tennessee"
    },
    {
        id: 42,
        fullName: "Washington Commanders",
        cityName: "Washington",
        nickname: "Commanders",
        logo: "./nfl/commanders.png",
        wideLogo: "./nfl/8x9/commanders.png",
        stadium: "FedExField",
        stadiumLocation: "Landover, Maryland"
    },
    {
        id: 43,
        fullName: "Washington Football Team",
        cityName: "Washington",
        nickname: "Football Team",
        logo: "./nfl/footballteam.png",
        wideLogo: "./nfl/8x9/footballteam.png",
        stadium: "FedExField",
        stadiumLocation: "Landover, Maryland"
    },
    {
        id: 44,
        fullName: "Washington Redskins",
        cityName: "Washington",
        nickname: "Redskins",
        logo: "./nfl/redskins.png",
        wideLogo: "./nfl/8x9/redskins.png",
        stadium: "FedExField",
        stadiumLocation: "Landover, Maryland"
    },
];
const WEEKS = [
    "Preseason Week 1",
    "Preseason Week 2",
    "Preseason Week 3",
    "Preseason Week 4",
    "Preseason Week 5",
    "Preseason Week 6",
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10",
    "Week 11",
    "Week 12",
    "Week 13",
    "Week 14",
    "Week 15",
    "Week 16",
    "Week 17",
    "Week 18",
    "Week 19",
    "Week 20",
    "Week 21",
    "Wild Card Game",
    "Divisional Playoff",
    "Conference Championship",
    "Super Bowl",
    "NFL Championship Game",
    "AFL Championship Game",
    "AFL Playoffs",
    "Playoffs Round 1",
    "Playoffs Round 2",
];
