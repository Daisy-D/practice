<?php

namespace app\controllers;

use Yii;
use app\models\Country;
use app\models\CountrySearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

class UserController extends Controller
{
  public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Country models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new CountrySearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return json_encode([
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }
  // public $modelClass = 'app\models\Country';
  
  // public function behaviors()
  // {
  //   return ArrayHelper::merge([
  //     [
  //       'class' => Cors::className(),
  //       'cors' => [
  //         'Origin' => ['*'],
  //         'Access-Control-Request-Method' => ['*'],
  //         'Access-Control-Request-Headers' => ['get', 'post'],
  //         'Access-Control-Allow-Credentials' => true,
  //         'Access-Control-Max-Age' => 86400,
  //         'Access-Control-Expose-Headers' => [],
  //       ],

  //     ],
  //   ], parent::behaviors());
  // }
}