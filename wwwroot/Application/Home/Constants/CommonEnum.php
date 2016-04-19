<?php
/**
 * Created by PhpStorm.
 * User: fengqiang
 * Date: 2016/4/18
 * Time: 18:30
 */

namespace Home\Constants;


class co
{
    /*****菜单属性*****/
    const TYPE   = 'type';
    const PARENT = 'parent';
    const LABEL  = 'label';
    const URL    = 'url';
    const GROUP  = 'group';
    const LEAF   = 'leaf';
    const ACTIVE = 'active';
    const ICON   = 'icon';
    const AUTH   = 'Auth';
    const TPL    = 'tpl';

    public static $navMenu = array(
        array(
            self::LABEL => '首页',
            self::ICON => 'test',
            self::URL => '/',
            self::ACTIVE=>'false',
        ),
        array(
            self::LABEL => '优雅编程',
            self::ICON => 'test',
            self::URL => '/index.php?s=/Home/Article/index/category/program.html',
            self::ACTIVE=>'false',
        ),
        array(
            self::LABEL => '前端开发',
            self::ICON => 'test',
            self::URL => '/index.php?s=/Home/Article/index/category/front.html',
            self::ACTIVE=>'false',
        ),
        array(
            self::LABEL => '程序人生',
            self::ICON => 'test',
            self::URL => '/index.php?s=/Home/Article/index/category/essay.html',
            self::ACTIVE=>'false',
        ),
        array(
            self::LABEL => '关于我',
            self::ICON => 'test',
            self::URL => '/index.php?s=/Home/Article/index/category/aboutme.html',
            self::ACTIVE=>'false',
        ),
    );
}