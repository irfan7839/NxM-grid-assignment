var Row=10; //number of rows
var Col=8 ; // number of cols
var m=[[0,0,0,0,0,0,0,0],
   [0,"#",0,0,0,"#",0,0],
   [0,0,0,0,"#",0,0,0],
   [0,0,0,0,0,0,0,0],
   [0,0,0,"#",0,0,"#",0],
   [0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,"#",0],
   [0,0,"#",0,0,"#",0,0],
   [0,0,0,0,0,0,0,0],
   [0,0,0,0,"#",0,0,0]
]; // N x M grid matrix with available path

var sr=9; // starting row coordinate
var sc=3; // starting col coordinate
var rq=[]; // row queue
var cq=[]; // col queue

visited=[]; // cordinates which are visited will be stored here
for(let row=0;row<Row;row++){
    visited.push(new Array(Col).fill(0));
} // initializing the visited matrix with value 0

var dr=[-1,1]; // movement along row direction
var dc=[-1,1]; // movement along col direction
solve(); // solution function

function solve(){
    let count=0;
    rq.push(sr);
    cq.push(sc);
    visited[sr][sc]="B" ;
    while(rq.length){
       var r=rq.shift();
       var c=cq.shift();
        neighbours(r,c);
    }
    for(let i=0;i<10;i++){
        for(let j=0;j<8;j++){
            if (visited[i][j]===1){
                count=count+1;
            }
        }
    }
    
    console.log(count);
}
function neighbours(r,c){
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            rr=r+dr[i];
            cc=c+dc[j];
            
            if (rr<0 || cc<0){
                continue;
            }
            if (rr>=Row || cc>=Col){
                continue;
            }
            if (visited[rr][cc]){
                continue;
            }
            if (m[rr][cc]==="#"){ 
                continue;
            }
            rq.push(rr);
            cq.push(cc);
            visited[rr][cc]=1;
        }
    }
}

