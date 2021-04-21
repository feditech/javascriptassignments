var sehriTime = [];
var aftariTime = [];
var date = [];

sehriTime[1] = "4:53 AM";
aftariTime[1] = "6:54 PM";
date[1] = "Apr 14,Wed";

sehriTime[2] = "4:52 AM";
aftariTime[2] = "6:54 PM";
date[2] = "Apr 15,Thu";

sehriTime[3] = "4:51 AM";
aftariTime[3] = "6:55 PM";
date[3] = "Apr 16,Fri";

sehriTime[4] = "4:50 AM";
aftariTime[4] = "6:55 PM";
date[4] = "Apr 17,Sat";

sehriTime[5] = "4:49 AM";
aftariTime[5] = "6:56 PM";
date[5] = "Apr 18,Sun";

sehriTime[6] = "4:58 AM";
aftariTime[6] = "6:57 PM";
date[6] = "Apr 19,Mon";

sehriTime[7] = "4:46 AM";
aftariTime[7] = "6:56 PM";
date[7] = "Apr 20,Tue";

sehriTime[8] = "4:45 AM";
aftariTime[8] = "6:57 PM";
date[8] = "Apr 21,Wed";

sehriTime[9] = "4:44 AM";
aftariTime[9] = "6:57 PM";
date[9] = "Apr 22,Thu";

sehriTime[10] = "4:43 AM";
aftariTime[10] = "6:58 PM";
date[10] = "Apr 23,Fri";

sehriTime[11] = "4:42 AM";
aftariTime[11] = "6:58 PM";
date[11] = "Apr 24,Sat";

sehriTime[12] = "4:41 AM";
aftariTime[12] = "6:59 PM";
date[12] = "Apr 25,Sun";

sehriTime[13] = "4:40 AM";
aftariTime[13] = "6:59 PM";
date[13] = "Apr 26,Mon";

sehriTime[14] = "4:39 AM";
aftariTime[14] = "7:00 PM";
date[14] = "Apr 27,Tue";

sehriTime[15] = "4:38 AM";
aftariTime[15] = "7:00 PM";
date[15] = "Apr 28,Wed";

sehriTime[16] = "4:37 AM";
aftariTime[16] = "7:01 PM";
date[16] = "Apr 29,Thu";

sehriTime[17] = "4:36 AM";
aftariTime[17] = "7:01 PM";
date[17] = "Apr 30,Fri";

sehriTime[18] = "4:35 AM";
aftariTime[18] = "7:02 PM";
date[18] = "May 1,Sat";

sehriTime[19] = "4:34 AM";
aftariTime[19] = "7:02 PM";
date[19] = "May 2,Sun";

sehriTime[20] = "4:33 AM";
aftariTime[20] = "7:03 PM";
date[20] = "May 3,Mon";

sehriTime[21] = "4:33 AM";
aftariTime[21] = "7:03 PM";
date[21] = "May 4,Tue";

sehriTime[22] = "4:32 AM";
aftariTime[22] = "7:04 PM";
date[22] = "May 5,Wed";

sehriTime[23] = "4:31 AM";
aftariTime[23] = "7:04 PM";
date[23] = "May 6,Thu";

sehriTime[24] = "4:30 AM";
aftariTime[24] = "7:05 PM";
date[24] = "May 7,Fri";

sehriTime[25] = "4:29 AM";
aftariTime[25] = "7:05 PM";
date[25] = "May 8,Sat";

sehriTime[26] = "4:28 AM";
aftariTime[26] = "7:06 PM";
date[26] = "May 9,Sun";

sehriTime[27] = "4:27 AM";
aftariTime[27] = "7:06 PM";
date[27] = "May 10,Mon";

sehriTime[28] = "4:27 AM";
aftariTime[28] = "7:07 PM";
date[28] = "May 11,Tue";

sehriTime[29] = "4:26 AM";
aftariTime[29] = "7:07 PM";
date[29] = "May 12,Wed";

sehriTime[30] = "4:25 AM";
aftariTime[30] = "7:08 PM";
date[30] = "May 13,Thu";

document.write('<table class="tbl" border="1"  cellspacing="0"  >');
document.write('<tr class= "row1" > <td>  Sr.  </td> ');
document.write(" <td>" + "Day" + "</td> ");
document.write(" <td>" + "Sehar" + "</td> ");
document.write(" <td>" + "Aftar" + "</td> </tr>");

for (var i = 1; i <= 30; i++) {

  document.write("<tr> <td>" + [i] + "</td> ");
  document.write(" <td>" + date[i] + "</td> ");
  document.write(" <td>" + sehriTime[i] + "</td> ");
  document.write(" <td>" + aftariTime[i] + "</td> </tr>");
}

var search = +prompt("enter roza number");
for (i = 1; i <= 30; i++) {
  if (search === i) {
    alert("Roza "+[i] + ": "+ " Date: " + date[i] + " Sehar: "  + sehriTime[i] + " Iftar: " + aftariTime[i])
  }
}
