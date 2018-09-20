<?php

namespace app\controllers;

use yii\web\Controller;
use yii\data\Pagination;
use app\models\Country;

class CountryController extends Controller
{
    public function actionIndex()
    {
        $query = Country::find();

        $pagination = new Pagination([
            'defaultPageSize' => 5,
            'totalCount' => $query->count(),
        ]);

        $countries = $query->orderBy('name')
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();

        $array = array();
        $array['msg'] = 'ok';
        $array['data'] = array();
        foreach ($countries as $row) {
            array_push($array['data'], array('code' => $row['code'], 'name' => $row['name'], 'population' => $row['population']));
        }
        return json_encode($array);
            // return json_encode($countries);

            // $array = array();
            // foreach ($attributes as $row) {
            //     array_push($array, array('name' => $row['name'], 'code' => $row['code'], 'population' => $row['population']));
            // }        
            // // $array['data'] = 1;
            // // $array['data2'] = 2;
            // // $array['data3'] = \yii\helpers\Json::encode($countries);
            // return json_encode($array);
            //     // return json_encode($countries);


    }
}