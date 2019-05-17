module.exports.templateTags = [{
    name: 'randomCertNo',
    displayName: 'Random Cert No',
    description: 'Generate a random certno',
    args: [
    ],
    async run () {
		
		var provinceArray = ["110000","120000","130000","140000","150000","210000","220000","230000","310000","320000","330000","340000","350000","360000","370000","410000","420000","430000","440000","450000","460000","500000","510000","520000","530000","540000","610000","620000","630000","640000","650000","710000","810000","820000","110100","110101","110102","110103","110104","110105","110106","110107","110108","110109","110111","110112","110113","101114","110115","110116","110117","110200","110228","110229","120100","120101","120102","120103","120104","120105","120106","120107","120108","120109","120110","120111","120112","120113","120114","120115","120200","120221","120223","120225","130100","130101","130102","130103","130104","130105","130107","130108","130121","130123","130124","130125","130126","130127","130128","130129","130130","130131","130132","130133","130181","130182","130183"];
        var ind = Math.floor(Math.random() * ((provinceArray.length - 1) - 0  + 1) + 0);

        var address = provinceArray[ind] ;

		var monthArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
		var dayArray = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

		var birInd = Math.floor(Math.random() * (Number(2001) - Number(1960)  + 1) + Number(1960));
		var monthInd = Math.floor(Math.random() * ((monthArray.length - 1) - 0  + 1) + 0);
		var dayInd = Math.floor(Math.random() * ((dayArray.length - 1) - 0  + 1) + 0);
		var birthday = birInd + monthArray[monthInd] + dayArray[dayInd];

		var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"];
		var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
		
		var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
		var array = (address + birthday + s).split("");
		var total = 0;
		for (var i = 0; i < array.length; i++) {
			total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
		}
		var lastNumber = lastNumberArray[parseInt(total % 11)];
		
		randomCertNo =  address + birthday + s + lastNumber;
		return randomCertNo;
    }
}];
