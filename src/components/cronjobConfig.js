import { DocumentDelete, Edit, Download } from '@element-plus/icons-vue'
import { shallowRef ,ref } from 'vue'

let checkNum = (rule, value, callback) => {
    // 函数用于检查其参数是否是非数字值,如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。
    if (isNaN(value)) {
        return callback("iffLength must be a number");
    }
    return callback();
}
let checkVersion = (rule, value, callback) => {
    let regex = /^V(\d{2})[A-L]$/;
    if (regex.test(value)) {
        callback();
        return true;
    } else {
        callback(new Error("Version must be similar to 'V23G'"));
        return false;
    }
}

const cronjobConfig = ref({
    rules: {
        iffLength: [
            { required: true, message: 'Please input iff length', trigger: 'blur' },
            { validator: checkNum, trigger: "blur" }
        ],
        keySize: [
            { required: true, message: 'Please select key size', trigger: 'change', }
        ],
        dataFileName: [{
            required: true,
            message: 'Please input data filename',
            trigger: 'blur',
        }],
        wfdName: [{
            required: true,
            message: 'Please input wfd name',
            trigger: 'blur',
        }],
        version: [{ required: true, message: 'Please input version', trigger: 'blur' },
            { validator: checkVersion, trigger: "blur" }
        ]
    },
    formItems: [{
            field: 'iffLength',
            prop: 'iffLength',
            label: 'iff length',
            placeholder: '1793',
            labelWidth: '150px',
            type: 'input',
            // size: 'small',
            span: 12,
        },
        {
            field: 'keySize',
            prop: 'keySize',
            type: 'select',
            label: 'key size',
            placeholder: 'select key size',
            // editable: true,
            // size: 'small',
            span: 12,
            options: [{ label: 6, value: 6 }, { label: 9, value: 9 }]
        },
        {
            field: 'dataFileName',
            prop: 'dataFileName',
            type: 'input',
            label: 'data filename',
            labelWidth: '150px',
            placeholder: 'data filename',
            // isHidden: false,
            span: 12,
        },
        {
            field: 'wfdName',
            prop: 'wfdName',
            type: 'input',
            label: 'WFD name',
            placeholder: 'WFD name',
            span: 12,
        },
        {
            field: 'version',
            prop: 'version',
            type: 'input',
            label: 'version',
            labelWidth: '150px',
            placeholder: 'version',
            span: 12,
        },
    ],
    // 按钮
    buttons: [{
            name: '生成转码程序',
            title: 'generateCronjob',
            type: 'primary',
            size: 'default', //可以是default，small,large
            icon: shallowRef(Edit),
            // 按钮是否为朴素类型
            // plain: true,
            onClick: null
        }, {
            name: '重置',
            type: 'info',
            title: 'resetCronjob',
            size: 'default',
            icon: shallowRef(DocumentDelete),
            // plain: true,
            onClick: null
        },
        {
            name: '下载转码程序',
            type: 'success',
            title: 'downloadCronjob',
            size: 'default',
            icon: shallowRef(Download),
            isHidden: true,
            // plain: true,
            onClick: null
        }
    ],
    ref: 'cronjobFormRef',
    labelWidth: '120px',
    labelPosition: 'right',
    inline: true,
    editable: true,
    // 单元列之间的间隔
    elRowGutter: 20,
    // size: 'small',
    // 是否需要form边框
    formBorder: true,
    colLayout: {
        xl: 5, //2K屏等
        lg: 8, //大屏幕，如大桌面显示器
        md: 12, //中等屏幕，如桌面显示器
        sm: 24, //小屏幕，如平板
        xs: 24 //超小屏，如手机
    }
});

export default cronjobConfig;