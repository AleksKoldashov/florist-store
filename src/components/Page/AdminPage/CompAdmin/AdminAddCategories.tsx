import React, {  useState } from "react";
import { useMutation, useQueryClient} from "react-query";
import { Button, Card, Input, Spin } from "antd";
import {ListCategories} from "./Utilits/ListCategories";
import { FormAddCategories } from "./Utilits/Form/FormAddCategorie";

export default function AdminAddCategories (){

    // House Plants Potter Plants Seeds Small Plants Big Plants Succulents Trerrariums Gardening Accessories
    return (
        <div>
           <FormAddCategories/>
            <h1>List categories:</h1>
           <ListCategories/>
        </div>
    )
}