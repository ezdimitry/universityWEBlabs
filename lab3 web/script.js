function makeTableFromCountry (country){
            var data = [[], [], [], 0];
            for(var i = 0; i < country.length; i++){
                if(typeof country [i] === "string"){
                    data[0].push(country[i]);
                }else if(typeof country[i] === "number"){
                    data[3] = country[i];
                }
                else{
                    if(Array.isArray(country[i])){
                        if(Array.isArray(country[i][0])){
                            data[2] = country[i];
                        }
                    }else{
                        data[1] = country[i];
                    }
                }
            }
            for(var i = 0; i < data[0].length; i++){
                if(data[0][i] === ""){
                    data[0][i] = "-";
                }
            }

            let table = document.createElement('table');
            table.setAttribute('border', '1');
            table.setAttribute('width', '50%');
            let name = table.insertRow();
            name.insertCell().innerHTML = "<h1>"+data[0][0]+"-"+data[0][1]+"</h1>";
            let baseinfo = table.insertRow();
            let basetable = document.createElement('table');
            let basetablrows = [basetable.insertRow(), basetable.insertRow(), basetable.insertRow()];
            basetablrows[0].insertCell().innerHTML = "Часть света";
            basetablrows[0].insertCell().innerHTML = data[0][3];
            basetablrows[1].insertCell().innerHTML = "Денежная единица";
            basetablrows[1].insertCell().innerHTML = data[0][4];
            basetablrows[2].insertCell().innerHTML = "Разница во времени";
            basetablrows[2].insertCell().innerHTML = data[3];
            baseinfo.insertCell().appendChild(basetable);

            let books = table.insertRow();
            let booktable = document.createElement('table');
            booktable.setAttribute('width', '100%');
            let bookrow = booktable.insertRow();
            bookrow.insertCell().innerHTML = "Литературные произведения";
            let booklist = document.createElement('table');
            data[2].forEach(i=>{
                booklist.insertRow().insertCell().innerHTML = i[0]+" <br>\""+i[1]+"\" <br>("+i[2]+");";
            });
            bookrow.insertCell().appendChild(booklist);
            books.insertCell().appendChild(booktable);

            let history = table.insertRow();
            let historytable = document.createElement('table');
            historytable.setAttribute('border', '1');
            historytable.setAttribute('width', '100%');
            let keys = Object.keys(data[1]);
            let historytitle = historytable.insertRow().insertCell();
            historytitle.setAttribute('colspan', keys.length);
            historytitle.setAttribute('align', 'center');
            historytitle.innerHTML = "<h3>Исторические события</h3>";
            let historylist = historytable.insertRow();
            keys.forEach(i=>{
                historylist.insertCell().innerHTML = i+" "+data[1][i];
            });
            history.insertCell().appendChild(historytable);
            return table;
        }
        countriesTable=countries.map(makeTableFromCountry);
        countriesTable.forEach(function(info, i, arr) {
            document.body.appendChild(info);
        });
