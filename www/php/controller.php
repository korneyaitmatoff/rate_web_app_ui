<?php
$post = json_decode(file_get_contents('php://input'), true);

switch($post['url']) {
    case('user/auth'):
        print_r(post($post['url'], [
            'login' => $post['login'],
            'password' => $post['password']
        ]));
        break;
    case('user'):
        print_r(post($post['url'], [
            'name' => $post['name'],
            'login' => $post['login'],
            'password' => $post['password']
        ]));
        break;
    case(preg_match('/site\/user\/\d+/', $post['url']) ? $post['url'] : !$post['url']):
        print_r(get($post['url']));
        break;
    case(preg_match('/site\?limit=\d+\&offset=\d+/', $post['url']) ? $post['url'] : !$post['url']):
        print_r(get($post['url']));
        break;
    case(preg_match('/site\/\d+/', $post['url']) ? $post['url'] : !$post['url']):
        print_r(get($post['url']));
        break;
}

function post($url, $data) {
    $curl = curl_init();
    $data = json_encode($data);
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://45.9.43.40/'.$url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $data,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json'
        ]
    ));
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

function get($url) {
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://45.9.43.40/'.$url,
        CURLOPT_POST => false,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json'
        ]
    ));
    $output = curl_exec($curl);
    curl_close($curl);
    return;
}