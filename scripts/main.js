function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function capacityBar(newValue)
{
   document.getElementById("capacity").innerHTML=newValue;
   FromBlocksize(document.getElementById("blocksize").value);
}

function blocksizeBar(newValue)
{
   document.getElementById("blocksizeBar").value=newValue.replace(/,/g , "");
   document.getElementById("blocksize").value=numberWithCommas(newValue.replace(/,/g , ""));
   FromBlocksize(newValue.replace(/,/g , ""));
}

function avgBlocktimeBar(newValue)
{
   document.getElementById("avgBlocktime").value=numberWithCommas(newValue.replace(/,/g , ""));
   document.getElementById("avgBlocktimeBar").value=newValue.replace(/,/g , "");
   FromBlocksize(document.getElementById("blocksize").value.replace(/,/g , ""));
}
function blockchainIncreaseBar(newValue)
{
   document.getElementById("blockchainIncreaseBar").value=newValue.replace(/,/g , "");
   document.getElementById("blockchainIncrease").value=numberWithCommas(newValue.replace(/,/g , ""));
   FromBlockchainIncrease(newValue.replace(/,/g , ""));
}
function uniqueBitcoinersBar(newValue)
{
   document.getElementById("uniqueBitcoinersBar").value=newValue.replace(/,/g , "");
   document.getElementById("uniqueBitcoiners").value=numberWithCommas(newValue.replace(/,/g , ""));
   FromUniqueBitcoiners(newValue.replace(/,/g , ""));
}
function overallTxPerSecBar(newValue)
{
   document.getElementById("overallTxPerSecBar").value=newValue;
   document.getElementById("overallTxPerSec").value=numberWithCommas(newValue.replace(/,/g , ""));
   FromOveralTxPerSec(newValue.replace(/,/g , ""));
}
function avgTxPerPersPerYearBar(newValue)
{
   document.getElementById("avgTxPerPersPerYear").value=numberWithCommas(newValue.replace(/,/g , ""));
   document.getElementById("avgTxPerPersPerYearBar").value=newValue;
   FromAvgTxPerPersPerYear(newValue.replace(/,/g , ""));
}
function avgTxSizeBar(newValue)
{
   document.getElementById("avgTxSize").value=numberWithCommas(newValue.replace(/,/g , ""));
   document.getElementById("avgTxSizeBar").value=newValue.replace(/,/g , "");
   FromBlocksize(document.getElementById('blocksize').value.replace(/,/g , ""));
}
function avgTxPerBlockBar(newValue)
{
   document.getElementById("avgTxPerBlock").value=numberWithCommas(newValue.replace(/,/g , ""));
   document.getElementById("avgTxPerBlockBar").value=newValue.replace(/,/g , "");
   FromAvgTxPerBlock(newValue.replace(/,/g , ""));

}
function maxTxPerYearBar(newValue)
{
   document.getElementById("maxTxPerYear").value=numberWithCommas(newValue.replace(/,/g , ""));
   document.getElementById("maxTxPerYearBar").value=newValue.replace(/,/g , "");
   FromMaxTxPerYearBar(newValue.replace(/,/g , ""));
}


function SetDefaults()
{
//Forms
document.getElementById('capacity').innerHTML=("100");

document.getElementById('blocksize').value=("0.9536743164");
document.getElementById('avgBlocktime').value=("10");
document.getElementById('blockchainIncrease').value=("48.983842134154685");

document.getElementById('uniqueBitcoiners').value=("10,000,000");
document.getElementById('overallTxPerSec').value=("3.623333333333");
document.getElementById('avgTxPerPersPerYear').value=("11.4343704");

document.getElementById('avgTxSize').value=("459.98160074");
document.getElementById('avgTxPerBlock').value=("2174");
document.getElementById('maxTxPerYear').value=("114,343,704");
//Bars
document.getElementById('capacityBar').value=("100");

document.getElementById('blocksizeBar').value=("0.9536743164");
document.getElementById('avgBlocktimeBar').value=("10");
document.getElementById('blockchainIncreaseBar').value=("48.983842134154685");

document.getElementById('uniqueBitcoinersBar').value=("10,000,000");
document.getElementById('overallTxPerSecBar').value=("3.623333333333");
document.getElementById('avgTxPerPersPerYearBar').value=("11.4343704");

document.getElementById('avgTxSizeBar').value=("459.98160074");
document.getElementById('avgTxPerBlockBar').value=("2174");
document.getElementById('maxTxPerYearBar').value=("114,343,704");
}


function FromBlocksize(val)
{

var capacity = document.getElementById('capacity').innerHTML;
var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));
//var blockchainIncrease = parseFloat(document.getElementById("blockchainIncrease").value.replace(/,/g , ""));

var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
//var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
//var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
//var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
//var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
// derrived vars
var effBlocksize = (val*parseFloat(capacity/100));
var txPerBlock = (effBlocksize*1024*1024/parseFloat(avgTxSize));
var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;

//set vars
document.getElementById('blockchainIncrease').value=(numberWithCommas((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2)));
document.getElementById('overallTxPerSec').value=numberWithCommas(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
document.getElementById('avgTxPerBlock').value=numberWithCommas(parseFloat(txPerBlock).toFixed(2));
document.getElementById('maxTxPerYear').value=numberWithCommas(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

document.getElementById('blockchainIncreaseBar').value=((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
document.getElementById('overallTxPerSecBar').value=(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
document.getElementById('avgTxPerBlockBar').value=(parseFloat(txPerBlock).toFixed(2));
document.getElementById('maxTxPerYearBar').value=(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

}

function FromBlockchainIncrease(val)
{

   var capacity = document.getElementById('capacity').innerHTML;
   var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));

   var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
   //var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
   //var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

   var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
   //var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
   //var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
   // derrived vars
   
   var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;
   var effBlocksize = (parseFloat(val*1024/blocksPerYear)*parseFloat(capacity/100));
   var txPerBlock = (effBlocksize*1024*1024/parseFloat(avgTxSize));

   //set vars
   document.getElementById('blocksize').value=numberWithCommas(effBlocksize.toFixed(2));
   document.getElementById('overallTxPerSec').value=numberWithCommas(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlock').value=numberWithCommas(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYear').value=numberWithCommas(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

   document.getElementById('blocksizeBar').value=effBlocksize;
   document.getElementById('overallTxPerSecBar').value=(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlockBar').value=(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYearBar').value=(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

}
function FromUniqueBitcoiners(val)
{
   var blocksize = document.getElementById('blocksize').value;
   var capacity = document.getElementById('capacity').innerHTML;
   var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));

   var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
   //var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
   //var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

   var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
   //var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
   //var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
   // derrived vars
   
   var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;
   var effBlocksize = (blocksize*parseFloat(capacity/100));
   var txPerBlock = (effBlocksize*1024*1024/parseFloat(avgTxSize));


   //document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(val)).toFixed(2));
   //document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(val)).toFixed(2));

   document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(((blocksPerYear*txPerBlock)/val).toFixed(2));
   document.getElementById('avgTxPerPersPerYearBar').value=((blocksPerYear*txPerBlock)/val).toFixed(2);
}

function FromOveralTxPerSec(val)
{
   var capacity = document.getElementById('capacity').innerHTML;
   var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));

   var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
   //var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
   //var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

   var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
   //var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
   //var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
   // derrived vars
   
   var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;
   var txPerBlock = parseFloat((60*avgBlocktime))*val;
   var effBlocksize = ((txPerBlock*avgTxSize)*parseFloat(capacity/100))/1048576;
 
   //set vars
   document.getElementById('blockchainIncrease').value=numberWithCommas((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksize').value=numberWithCommas(effBlocksize.toFixed(2));
   //document.getElementById('overallTxPerSec').value=numberWithCommas(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlock').value=numberWithCommas(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYear').value=numberWithCommas(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

   document.getElementById('blockchainIncreaseBar').value=((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksizeBar').value=effBlocksize;
   //document.getElementById('overallTxPerSecBar').value=(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlockBar').value=(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYearBar').value=(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

}

function FromAvgTxPerPersPerYear(val)
{
   var capacity = document.getElementById('capacity').innerHTML;
   var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));

   var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
   //var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
   //var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

   var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
   //var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
   //var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
   // derrived vars
   
   var txPerYear = parseFloat(val*uniqueBitcoiners);
   var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;
   var txPerBlock = parseFloat(txPerYear/blocksPerYear);
   var effBlocksize = ((txPerBlock*avgTxSize)*parseFloat(capacity/100))/1048576;
 
   //set vars
   document.getElementById('blockchainIncrease').value=numberWithCommas((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksize').value=numberWithCommas(effBlocksize.toFixed(2));
   document.getElementById('overallTxPerSec').value=numberWithCommas(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   //document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlock').value=numberWithCommas(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYear').value=numberWithCommas(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

   document.getElementById('blockchainIncreaseBar').value=((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksizeBar').value=effBlocksize;
   document.getElementById('overallTxPerSecBar').value=(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   //document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlockBar').value=(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYearBar').value=(parseFloat(txPerBlock*blocksPerYear).toFixed(0));
}

function FromAvgTxPerBlock(val)
{

   var capacity = document.getElementById('capacity').innerHTML;
   var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));

   var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
   //var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
   //var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

   var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
   //var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
   //var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
   // derrived vars

   //var txPerYear = parseFloat(val*uniqueBitcoiners);
   var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;
   var txPerBlock = val;
   var effBlocksize = ((txPerBlock*avgTxSize)*parseFloat(capacity/100))/1048576;

   //set vars
   document.getElementById('blockchainIncrease').value=numberWithCommas((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksize').value=numberWithCommas(effBlocksize.toFixed(2));
   document.getElementById('overallTxPerSec').value=numberWithCommas(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   //document.getElementById('avgTxPerBlock').value=numberWithCommas(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYear').value=numberWithCommas(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

   document.getElementById('blockchainIncreaseBar').value=((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksizeBar').value=effBlocksize;
   document.getElementById('overallTxPerSecBar').value=(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   //document.getElementById('avgTxPerBlockBar').value=(parseFloat(txPerBlock).toFixed(2));
   document.getElementById('maxTxPerYearBar').value=(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

}

function FromMaxTxPerYearBar(val)
{

   var capacity = document.getElementById('capacity').innerHTML;
   var avgBlocktime = parseFloat(document.getElementById("avgBlocktime").value.replace(/,/g , ""));

   var uniqueBitcoiners = parseFloat(document.getElementById("uniqueBitcoiners").value.replace(/,/g , ""));
   //var overallTxPerSec = parseFloat(document.getElementById("overallTxPerSec").value.replace(/,/g , ""));
   //var avgTxPerPersPerYear = parseFloat(document.getElementById("avgTxPerPersPerYear").value.replace(/,/g , ""));

   var avgTxSize = parseFloat(document.getElementById("avgTxSize").value.replace(/,/g , ""));
   //var maxTxPerBlock = parseFloat(document.getElementById("maxTxPerBlock").value.replace(/,/g , ""));
   //var maxTxPerYear = parseFloat(document.getElementById("maxTxPerYear").value.replace(/,/g , ""));
   // derrived vars

   //var txPerYear = parseFloat(val*uniqueBitcoiners);
   
   var blocksPerYear = ((60/parseFloat(avgBlocktime))*24)*365.25;
   var txPerBlock = (val)/blocksPerYear;
   var effBlocksize = ((txPerBlock*avgTxSize)*parseFloat(capacity/100))/1048576;

   //set vars
   
   document.getElementById('blockchainIncrease').value=numberWithCommas((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksize').value=numberWithCommas(effBlocksize.toFixed(2));
   document.getElementById('overallTxPerSec').value=numberWithCommas(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYear').value=numberWithCommas(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlock').value=numberWithCommas(parseFloat(txPerBlock).toFixed(2));
   //document.getElementById('maxTxPerYear').value=numberWithCommas(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

   document.getElementById('blockchainIncreaseBar').value=((parseFloat(effBlocksize*(1440/parseFloat(avgBlocktime))*365.25)/1024).toFixed(2));
   document.getElementById('blocksizeBar').value=effBlocksize;
   document.getElementById('overallTxPerSecBar').value=(parseFloat(txPerBlock/parseFloat(avgBlocktime*60)).toFixed(2));
   document.getElementById('avgTxPerPersPerYearBar').value=(parseFloat(((blocksPerYear)*txPerBlock)/parseFloat(uniqueBitcoiners)).toFixed(2));
   document.getElementById('avgTxPerBlockBar').value=(parseFloat(txPerBlock).toFixed(2));
   //document.getElementById('maxTxPerYearBar').value=(parseFloat(txPerBlock*blocksPerYear).toFixed(0));

}