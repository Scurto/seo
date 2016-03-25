<?php

if($_POST){

    if ($_POST['action'] == 'addRunner') {
        $fname = htmlspecialchars($_POST['txtFirstName']);
        $lname = htmlspecialchars($_POST['txtLastName']);
        $gender = htmlspecialchars($_POST['ddlGender']);
        $minutes = htmlspecialchars($_POST['txtMinutes']);
        $seconds = htmlspecialchars($_POST['txtSeconds']);
        if(preg_match('/[^\w\s]/i', $fname) || preg_match('/[^\w\s]/i', $lname)) {
            fail('Invalid name provided.');
        }
        if( empty($fname) || empty($lname) ) {
            fail('Please enter a first and last name.');
        }
        if( empty($gender) ) {
            fail('Please select a gender.');
        }
        if( empty($minutes) || empty($seconds) ) {
            fail('Please enter minutes and seconds.');
        }

        $time = $minutes.":".$seconds;

        $query = "INSERT INTO runners SET first_name='$fname', last_name='$lname', gender='$gender', finish_time='$time'";
        $result = db_connection($query);

        if ($result) {
            $msg = "Runner: ".$fname." ".$lname." added successfully" ;
            success($msg);
        } else {
            fail('Insert failed.');
        }
        exit;
    } elseif ($_POST['action'] == 'delFinishers') {
        $fnames = $_POST['name'];

        $query = "SELECT first_name FROM runners order by finish_time ASC ";
        $result = db_connection($query);

        $runners = array();

        while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
//            array_push($runners, array('fname' => $row['first_name']));
//            array_push($runners, array($row['first_name']));
            array_push($runners, $row['first_name']);
        }
        if (in_array($fnames, $runners)) {
            $query = "DELETE FROM runners WHERE first_name = '$fnames'";
            $result = db_connection($query);
            if ($result) {
                success($fnames);
            } else {
                fail("CANN't delete user");
            }
        } else {
            fail("NO USER IN DB");
        }

        exit;
    } elseif ($_POST['action'] == 'loginForm') {
        $email = htmlspecialchars($_POST['email']);
        $pass = htmlspecialchars($_POST['pass']);
        $date = date("d.m.y");

        if( empty($email) || empty($pass) ) {
            fail('Please enter a first and last name.');
        }
        $query = "INSERT INTO USERS SET user_name='$email', user_password='$pass', create_time='$date'";
        $result = db_connection($query);

        if ($result) {
            $msg = "User: ".$email." added successfully" ;
            success($msg);
        } else {
            fail('Insert failed.');
        }
        exit;
    } elseif ($_POST['action'] == 'getTime') {
//        success("test");
        $date = date("F j, Y, g:i:s a");
        $dayOfWeek = date(N);
        $dateOfMonth = date(j);
        $month = date(n);
        $year = date(Y);
        die(json_encode(array('status' => 'success',
                                'dayOfWeek' => $dayOfWeek,
                                'dateOfMonth' => $dateOfMonth,
                                'month' => $month,
                                'year' => $year)));
        exit;
    } elseif ($_POST['action'] == 'getLinkTime') {
//        success("test");
//        $date = date("F j, Y, g:i:s a");
//        $dayOfWeek = date(N);
        $dateOfMonth = date(j);
        $month = date(m);
        $year = date(Y);
        die(json_encode(array('status' => 'success',
            'dateOfMonth' => $dateOfMonth,
            'month' => $month,
            'year' => $year)));
        exit;
    } elseif ($_POST['action'] == 'getCurrentTime') {
        $hour = date(H);
        $minute = date(i);
        die(json_encode(array('status' => 'success',
            'hour' => $hour ,
            'minute' => $minute)));
        exit;
    } elseif ($_POST['action'] == 'checkForUpdate') {
    $taskId = $_POST['taskId'];
//    $prevDate = $_POST['prevDate'];
//    $prevReklama = $_POST['prevReklama'];
//    $lastDate = $_POST['lastDate'];
//    $lastReklama = $_POST['lastReklama'];

    $containsIdQuery = "SELECT * FROM hfjq_race_info.test_video WHERE task_id='$taskId'";
    $resultContains = db_connection($containsIdQuery);
        if ($resultContains) {
            die(json_encode(array('status' => 'success', 'message' => $message, 'taskId' => $row['task_id'])));
        } else {
            fail($resultContains);
        }
        exit;

    } elseif ($_POST['action'] == 'updateReklama') {
        $taskId = $_POST['taskId'];
        $prevDate = $_POST['prevDate'];
        $prevReklama = $_POST['prevReklama'];
        $lastDate = $_POST['lastDate'];
        $lastReklama = $_POST['lastReklama'];


        $queryUpdate = "UPDATE test_video SET prev_date='$prevDate', prev_reklama='$prevReklama', last_date='$lastDate', last_reklama='$lastReklama' where task_id = '$taskId'";
        $resultUpdate = db_connection($queryUpdate);
        if ($resultUpdate) {
            success('Update good.');
        } else {
            fail($resultUpdate);
        }

        exit;
    } elseif ($_POST['action'] == 'insetReklama') {
        $taskId = $_POST['taskId'];
        $prevDate = $_POST['prevDate'];
        $prevReklama = $_POST['prevReklama'];
        $lastDate = $_POST['lastDate'];
        $lastReklama = $_POST['lastReklama'];


        $queryInsert = "INSERT INTO test_video SET task_id = '$taskId', prev_date='$prevDate', prev_reklama='$prevReklama', last_date='$lastDate', last_reklama='$lastReklama'";
        $resultInsert = db_connection($queryInsert);
        if ($resultInsert) {
            success('Insert good.');
        } else {
            fail($resultInsert);
        }
        exit;
    } elseif ($_POST['action'] == 'selectReklama') {
        $taskId = $_POST['taskId'];

        $query = "SELECT * FROM hfjq_race_info.test_video WHERE task_id='$taskId'";
        $result = db_connection($query);

        $reklama = array();
//
        while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
////            array_push($video, array('videoId' => $row['video_id'], 'reklama' => $row['raklama'], 'testText' => $row['testText'], 'testJson' => $row['testJson']));
            array_push($reklama, array('task_id' => $row['task_id'], 'prev_date' => $row['prev_date'], 'prev_reklama' => $row['prev_reklama'], 'last_date' => $row['last_date'], 'last_reklama' => $row['last_reklama']));
            array_push($video, $row['task_id']);
        }
//        echo json_encode(array("video" => $reklama));

        if ($result) {

            die(json_encode(array('status' => 'success', 'message' => $message, "video" => $reklama)));
        } else {
            fail($result);
        }
        exit;
    } elseif ($_POST['action'] == 'selectReklamaSrc') {
        $taskId = $_POST['taskId'];

        $query = "SELECT * FROM hfjq_race_info.video_scr WHERE task_id='$taskId'";
        $result = db_connection($query);

        $reklama = array();
//
        while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
////            array_push($video, array('videoId' => $row['video_id'], 'reklama' => $row['raklama'], 'testText' => $row['testText'], 'testJson' => $row['testJson']));
            array_push($reklama, array('task_id' => $row['task_id'], 'prev_date' => $row['prev_date'], 'prev_reklama' => $row['prev_reklama'], 'last_date' => $row['last_date'], 'last_reklama' => $row['last_reklama']));
            array_push($video, $row['task_id']);
        }
//        echo json_encode(array("video" => $reklama));

        if ($result) {

            die(json_encode(array('status' => 'success', 'message' => $message, "video" => $reklama)));
        } else {
            fail($result);
        }
        exit;
    } elseif ($_POST['action'] == 'insetReklamaSrc') {
        $taskId = $_POST['taskId'];
        $prevDate = $_POST['prevDate'];
        $prevReklama = $_POST['prevReklama'];
        $lastDate = $_POST['lastDate'];
        $lastReklama = $_POST['lastReklama'];


        $queryInsert = "INSERT INTO video_scr SET task_id = '$taskId', prev_date='$prevDate', prev_reklama='$prevReklama', last_date='$lastDate', last_reklama='$lastReklama'";
        $resultInsert = db_connection($queryInsert);
        if ($resultInsert) {
            success('Insert good.');
        } else {
            fail($resultInsert);
        }
        exit;
    } elseif ($_POST['action'] == 'updateReklamaSrc') {
        $taskId = $_POST['taskId'];
        $prevDate = $_POST['prevDate'];
        $prevReklama = $_POST['prevReklama'];
        $lastDate = $_POST['lastDate'];
        $lastReklama = $_POST['lastReklama'];


        $queryUpdate = "UPDATE video_scr SET prev_date='$prevDate', prev_reklama='$prevReklama', last_date='$lastDate', last_reklama='$lastReklama' where task_id = '$taskId'";
        $resultUpdate = db_connection($queryUpdate);
        if ($resultUpdate) {
            success('Update good.');
        } else {
            fail($resultUpdate);
        }

        exit;
    }

}

if($_GET){
    if($_GET['action'] == 'getRunners'){
        $query = "SELECT first_name, last_name, gender, finish_time FROM runners order by finish_time ASC ";
        $result = db_connection($query);

        $runners = array();

        while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
            array_push($runners, array('fname' => $row['first_name'], 'lname' => $row['last_name'], 'gender' => $row['gender'], 'time' => $row['finish_time']));
        }
        echo json_encode(array("runners" => $runners));
        exit;
    }
}

function db_connection($query) {
    mysql_connect('127.0.0.1', 'root', 'root')
    OR die(fail('Could not connect to database.'));
    mysql_select_db('hfjq_race_info');

    return mysql_query($query);
}

function fail($message) {
    die(json_encode(array('status' => 'fail', 'message' => $message)));
}
function success($message) {
    die(json_encode(array('status' => 'success', 'message' => $message)));
}
?>

