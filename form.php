<h1>SSO Login karyawan</h1>
<br>
<p>untuk data yang disimpan akan masuk kedalam database kami, <b>terimakasih</b></p>

<form action="" method="post">
<table>
    <tr>
        <td width="13">Nama</td>
    </tr>
    <tr>
        <td><input type="text" name="username"></td>
    </tr>

    <tr>
        <td>Email</td>
    </tr>
    <tr>
    <td><input type="text" name="pass"></td>
    </tr>
    <tr>
        <br>
        <td><input type="submit" value="Simpan" name="proses"></td>
    </tr>
</table>
</form>
<!-- untuk mengambil data dari form -->
<?php
include "konek.php";

if(isset($_POST['proses'])){
    mysqli_query($konek,"insert into login_user set 
    username = '$_POST[username]',
    password = '$_POST[pass]' ");
    echo "data telah tersimpan";
}
?>

<!-- menampilkan data  -->
<div>
    <hr><br>
    <h4>HASIL INPUTAN</h4>
    <table border="1">
        <tr>
            <td>No</td>
            <td>NAMA</td>
            <td>EMAIL</td>
            <th> EDIT</th>
        </tr>
    <?php
    include "konek.php";

    $no = 1;
    $ambilData = mysqli_query($konek, "select * from login_user");
    while($tampil = mysqli_fetch_array($ambilData)){
        echo "
        <tr>
            <td>$no</td>
            <td>$tampil[username]</td>
            <td>$tampil[password]</td>
            <td><a href='?pass=$tampil[password]'> Hapus </a></td>
        </tr>
        ";
        $no++;
    };
    ?>
    </table>
</div>

<!-- hapus data -->
<?php 
    if(isset($_GET['pass'])){

        mysqli_query($konek,"delete from login_user where password='$_GET[pass]'");

        echo "Data telah terhapus";
        // echo "<meta http-equiv=refresh content = 2; URL: 'form.php'>";
    }
?>