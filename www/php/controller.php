<?php
$post = json_decode(file_get_contents('php://input'), true);

switch($post['type']) {
    case('post'):
        if(isset($post['port']) && $post['port'] === 83) {
            print_r(post($post['url'].'?'.http_build_query(['text' => $post['text']]), [], 83, false));
        } else if(isset($post['port']) && $post['port'] === 84) {
            $data = [
                'name' => $post['siteName'],
                'description' => $post['siteDescription'],
                'url' => $post['siteUrl'],
                'user_id' => $post['userId']
            ];
            print_r(post($post['url'], $data, 84, true));
        } else if(isset($post['auth'])) {
            print_r(post($post['url'], [
                'login' => $post['login'],
                'password' => $post['password']
            ]));
        } else {
            print_r(post($post['url'], [
                'name' => $post['name'],
                'login' => $post['login'],
                'password' => $post['password']
            ]));
        }
        break;
    case('get'):
        print_r(get($post['url'], isset($post['port']) ? $post['port'] : 82));
        break;
}

function post($url, $data, $port=82, $json=true) {
    $curl = curl_init();
    if($json) {
        $data = json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://45.9.43.40:'.$port.'/'.$url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
    ));
    if($json) {
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json'
        ]);
    }
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

function get($url, $port=84) {
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://45.9.43.40:'.$port.'/'.$url,
        CURLOPT_POST => false,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json'
        ]
    ));
    $output = curl_exec($curl);
    curl_close($curl);
    return;
}