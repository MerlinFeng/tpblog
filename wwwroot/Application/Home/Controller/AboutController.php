<?php
/**
 * Created by PhpStorm.
 * User: fengqiang
 * Date: 2016/4/18
 * Time: 19:43
 */

namespace Home\Controller;

class AboutController extends HomeController
{
    public function index(){
        dd(444);
        $this->display('About:index');
    }
}