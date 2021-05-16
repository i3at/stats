<template>
    <i-form :model="formItem" label-position="right" :label-width="100">
        <Row>
            <!-- <form-item label="商品コード" style="color:red;">  -->
                <i-col span="8">
                    <form-item label="品コード" required>
                        <i-input v-model="formItem.itemNo" placeholder="item number...">abc</i-input>
                    </form-item>
                </i-col>
                <i-col span="8">
                    <form-item label="コード">
                        <i-input v-model="formItem.colorCd" placeholder="color cd..."></i-input>
                    </form-item>
                </i-col>
                <i-col span="8">
                    <form-item label="コード">
                        <i-input v-model="formItem.sizeCd" placeholder="size cd..."></i-input>
                    </form-item>
                </i-col>
            <!-- </form-item> -->
        </Row>
        <!-- <row> -->
            <form-item label="商品名1" required>
                <i-input v-model="formItem.itemNm1" placeholder="item name 1..."></i-input>
            </form-item>
        <!-- </row> -->
        <!-- <row> -->
            <form-item label="商品名2">
                <i-input v-model="formItem.itemNm2" placeholder="item name 2..."></i-input>
            </form-item>
        <!-- </row> -->
        <form-item label="品名" required>
                <i-input v-model="formItem.hinmei" placeholder="hinmei..."></i-input>
        </form-item>
        <Row>
            <i-col span="12">
                <form-item label="colorNm">
                    <i-input v-model="formItem.colorNm" placeholder="colorNm..."></i-input>
                </form-item>
            </i-col>
            <i-col span="12">
                <form-item label="sizeNm">
                    <i-input v-model="formItem.sizeNm" placeholder="sizeNm..."></i-input>
                </form-item>
            </i-col>
        </Row>
        <Row>
            <i-col span="12">
                <form-item label="倉庫名" required>
                    <i-select v-model="formItem.whCd">
                        <i-option v-for="item in dropDownList.whCdList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
            </i-col>
            <i-col span="4">
                <form-item label="在庫管理">
                    <checkbox v-model="formItem.zaikoKanriFlg">する</checkbox>
                </form-item>
            </i-col>
        </Row>
        <row>
            <i-col span="12">
                <form-item label="賞味期限管理">
                    <checkbox v-model="formItem.syomiKigenFlg">する</checkbox>
                </form-item>
            </i-col>
            <i-col span="7">
                <form-item label="出荷期限">
                    賞味期限 &nbsp;<input-number :max="999" :min="0" v-model="formItem.syukkaKigen" size="small"></input-number>&nbsp;日前
                </form-item>
            </i-col>
        </row>
        <row>
            <i-col span="12">
                <form-item label="格納許容日数">
                    賞味期限 &nbsp;<input-number :max="999" :min="0" v-model="formItem.kakunouKyoyou" size="small"></input-number>&nbsp;日前
                </form-item>
            </i-col>
            <i-col span="12">
                <form-item label="商品特性">
                    <i-select v-model="formItem.kikenFlg">
                        <i-option v-for="item in dropDownList.kikenFlgList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
            </i-col>
        </row>
        <row>
            <i-col span="12">
                <form-item label="保留区分">
                     <checkbox v-model="formItem.horyuFlg">受注内容調査(任意保留)扱いにする</checkbox>
                </form-item>
            </i-col>
            <i-col span="12">
                <form-item label="入数">
                    <input-number :max="99999999" :min="0" v-model="formItem.irisuu" size="small"></input-number>
                </form-item>
            </i-col>
        </row>

        <row>
            <i-col span="12">
                <form-item label="単位">
                    <i-select v-model="formItem.itemTaniKbn">
                        <i-option v-for="item in dropDownList.itemTaniKbnList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
            </i-col>
            <i-col span="12">
                <form-item label="セット区分">
                    <i-select v-model="formItem.setKbn">
                        <i-option v-for="item in dropDownList.setKbnList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
            </i-col>
        </row>

        <!-- <row>
            <i-col span="12">
                <form-item label=""></form-item>
            </i-col>
            <i-col span="12">
                <form-item label=""></form-item>
            </i-col>
        </row> -->

        <!-- <row>
            <i-col span="12">
                <form-item label=""></form-item>
            </i-col>
            <i-col span="12">
                <form-item label=""></form-item>
            </i-col>
        </row> -->

        <!-- template -->

        <!-- <row>
            <i-col span="12">
                <form-item label=""></form-item>
            </i-col>
            <i-col span="12">
                <form-item label=""></form-item>
            </i-col>
        </row> -->

        <!-- xx -->
        <form-item label="DatePicker">
            <Row>
                <i-col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </i-col>
            </Row>
        </form-item>
        <form-item label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </form-item>
        <form-item label="Checkbox">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
            </CheckboxGroup>
        </form-item>
        <form-item label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </form-item>
        <form-item label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </form-item>
        <form-item label="Text">
            <i-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
        </form-item>
        <div>{{formItem}}</div>
    </i-form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    itemNo: 'aaa',
                    colorCd: '',
                    sizeCd: '',
                    itemNm1: '',
                    itemNm2: '',
                    hinmei: '',
                    colorNm: '',
                    sizeNm: '',
                    whCd: '',
                    zaikoKanriFlg: false,
                    syomiKigenFlg: false,
                    syukkaKigen: 0,
                    kakunouKyoyou: 0,
                    kikenFlg: '0',
                    horyuFlg: false,
                    irisuu: 0,
                    itemTaniKbn: '',
                    setKbn: '',

                    //
                    input: 'abc',
                    select: 'beijing',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '2018/11/30',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                dropDownList: {
                    whCdList: [
                        {
                            value: 'whCd1',
                            label: 'Kho Dong'
                        },
                        {
                            value: 'whCd2',
                            label: 'Kho Tay'
                        }
                    ],
                    kikenFlgList: [{
                            value: '0',
                            label: 'Value 0'
                        },
                        {
                            value: '1',
                            label: 'Value 1'
                    }],
                    itemTaniKbnList: [{
                        value: '',
                            label: ''
                        },
                        {
                            value: '1',
                            label: 'Value 1'
                    }],
                    setKbnList : [{value: '0', label: 'Value 0'}, {value: '1', label: 'Value 1'}]
                }
            }
        }
    }
</script>

<style scoped>
</style>
