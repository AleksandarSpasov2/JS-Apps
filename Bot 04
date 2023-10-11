// Bot 04

// vars
var total_tipped = 0;
var high_tip_username = null;
var high_tip_amount = 0;
var last_tip_username = null;
var last_tip_amount = 0;

var panelConfig = cb.settings.panelConfig;
var imageConfig = cb.settings.imageConfig;
var imageSelec = cb.settings.imageSelec;
var imageConfigTrue = cb.settings.imageConfigTrue;

var row1_LabelText = cb.settings.row1_LabelText;
var row1_LabelColor = cb.settings.row1_LabelColor;
var row1_Color = cb.settings.row1_Color;
var row1_Background = cb.settings.row1_Background;

var row2_LabelText = cb.settings.row2_LabelText;
var row2_LabelColor = cb.settings.row2_LabelColor;
var row2_Color = cb.settings.row2_Color;
var row2_Background = cb.settings.row2_Background;

var row3_LabelText = cb.settings.row3_LabelText;
var row3_LabelColor = cb.settings.row3_LabelColor;
var row3_Color = cb.settings.row3_Color;
var row3_Background = cb.settings.row3_Background;

cb.settings_choices = [
    { name: 'tokens', type: 'int', minValue: 1, default: 100 },
    { name: 'goal_description', type: 'str', minLength: 1, maxLength: 255 },

    {
        name: "panelConfig",
        label: "Panel configuration",
        type: "choice",
        choice1: "classic",
        choice2: "table",
        choice3: "image",
        defaultValue: "image"
    },
    {
        name: "imageSelec",
        label: "Select an image ID. You can see all the images in the top of Code Source section",
        type: "choice",
        choice1: "Image ID written in next section",
        choice2: "13c0efc6-b965-4045-ba1c-7fcffbac6b15",
        choice3: "1a683906-7304-4f80-96ea-1d57697d8b25",
        choice4: "57493d59-17f5-4937-9ac5-c5c0a73366af",
        choice5: "abf6ae1d-9ef0-4806-a66e-86065772f0c3",
        choice6: "cd656aff-14e3-4719-a84c-67fa2293c722",
        choice7: "a32fbc6d-9f37-4ebf-a114-a3f15e8871ae",
        choice8: "fa9d87de-dded-4b0e-998a-336c0bb9fa96",
        choice9: "d3a38bae-74d3-4b47-b838-642829178c60",
        choice10: "c79059a3-ffce-4139-af4a-ddb7406fac1a",
        choice11: "30f0a81c-c2da-4050-8cd2-16614cc8704a",
        choice12: "f79e4f78-b321-4a50-af55-bf3787e7a46d",
        choice13: "ab050eb8-f264-4007-adb8-024e5f656e31",
        choice14: "dad3012d-85a5-40b5-9a55-866f619b7d57",
        defaultValue: "Image ID written in next section",
    },
    {
        name: "imageConfig",
        label: "Image Panel configuration, select: Image ID written... first, (useful if you copy these app to upload your own image)",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "3960c2c1-f59e-4351-bfc6-20c6315b7734",
        required: true
    },
    {
        name: "row1_LabelText",
        label: "Row1 Label Text, default: Tip Received / Goal",
        type: 'str', minLength: 1, maxLength: 26,
        defaultValue: "Tip Received / Goal :",
        required: true
    },
    {
        name: "row1_LabelColor",
        label: "Color Row1 Label, only for Table or Image Panel",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "black",
        required: true
    },
    {
        name: "row1_Color",
        label: "Row1 Text Color, only for Table or Image Panel",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "black",
        required: true
    },
    {
        name: "row1_Background",
        label: "Row1 Background Color, only for Table",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "#ADD8E6",
        required: true
    },
    {
        name: "row2_LabelText",
        label: "Row2 Label Text, default: Highest Tip: ",
        type: 'str', minLength: 1, maxLength: 26,
        defaultValue: "Highest Tip:",
        required: true
    },
    {
        name: "row2_LabelColor",
        label: "Row2 Label Color, only for Table or Image Panel",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "black",
        required: true
    },
    {
        name: "row2_Color",
        label: "Row2 Tex Color, only for Table or Image Panel",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "black",
        required: true
    },
    {
        name: "row2_Background",
        label: "Row2 Background Color, only for Table",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "pink",
        required: true
    },
    {
        name: "row3_LabelText",
        label: "Row3 Label Text, default: Latest Tip Received: ",
        type: 'str', minLength: 1, maxLength: 26,
        defaultValue: "Latest Tip :",
        required: true
    },
    {
        name: "row3_LabelColor",
        label: "Row3 Label Color, only for Table or Image Panel",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "black",
        required: true
    },
    {
        name: "row3_Color",
        label: "Row3 Color, only for Table or Image Panel",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "black",
        required: true
    },
    {
        name: "row3_Background",
        label: "Row3 Background Color, only for Table",
        type: 'str', minLength: 1, maxLength: 50,
        defaultValue: "#ADD8E6",
        required: true
    },
];

// handlers
if (imageSelec != "Image ID written in the next section") {
    imageConfigTrue = imageSelec;
} else {
    imageConfigTrue = imageConfig;
}

cb.onTip(function(tip) {
    total_tipped += tip['amount'];
    last_tip_amount = tip['amount'];
    last_tip_username = tip['from_user'];
    if (tip['amount'] > high_tip_amount) {
        high_tip_amount = tip['amount'];
        high_tip_username = tip['from_user'];
    }
    cb.drawPanel();
});

cb.onDrawPanel(function(user) {
    if (cb.settings.panelConfig == "image") {
        return {
            "template": "image_template",
            "layers": [
                { 'type': 'image', 'fileID': imageConfigTrue },
                {
                    'type': 'text',
                    'text': row1_LabelText,
                    'top': 5,
                    'left': 10,
                    'font-size': 11,
                    'font-weight': 'bold',
                    'color': row1_LabelColor,
                },
                {
                    'type': 'text',
                    'text': row2_LabelText,
                    'top': 29,
                    'left': 10,
                    'font-size': 11,
                    'font-weight': 'bold',
                    'color': row2_LabelColor,
                },
                {
                    'type': 'text',
                    'text': row3_LabelText,
                    'top': 52,
                    'left': 10,
                    'font-size': 11,
                    'font-weight': 'bold',
                    'color': row3_LabelColor,
                },
                {
                    'type': 'text',
                    'text': '' + total_tipped + ' / ' + cb.settings.tokens,
                    'top': 5,
                    'left': 147,
                    'font-size': 11,
                    'font-weight': 'bold',
                    'color': row1_Color,
                },
                {
                    'type': 'text',
                    'text': " " + format_username(high_tip_username) + ' (' + high_tip_amount + ')',
                    'top': 29,
                    'left': 147,
                    'font-size': 11,
                    'font-weight': 'bold',
                    'color': row2_Color,
                },
                {
                    'type': 'text',
                    'text': " " + format_username(last_tip_username) + ' (' + last_tip_amount + ')',
                    'top': 52,
                    'left': 147,
                    'font-size': 11,
                    'font-weight': 'bold',
                    'color': row3_Color,
                },
            ],
        };
    }
    if (cb.settings.panelConfig == "table") {
        return {
            "template": "image_template",
            "table": {
                "row_1": {
                    "background-color": row1_Background,
                    "col_1": {
                        "color": row1_LabelColor,
                        "text-align": "center",
                        "font-weight": "bold",
                        "value": row1_LabelText
                    },
                    "col_2": {
                        "color": row1_Color,
                        "text-align": "center",
                        "value": ' ' + total_tipped + ' / ' + cb.settings.tokens,
                    },
                },
                "row_2": {
                    "background-color": row2_Background,
                    "col_1": {
                        "color": row2_LabelColor,
                        "text-align": "center",
                        "font-weight": "bold",
                        "value": row2_LabelText
                    },
                    "col_2": {
                        "color": row2_Color,
                        "text-align": "center",
                        "value": " " + format_username(high_tip_username) + ' (' + high_tip_amount + ')'
                    },
                },
                "row_3": {
                    "background-color": row3_Background,
                    "col_1": {
                        "color": row3_LabelColor,
                        "text-align": "center",
                        "font-weight": "bold",
                        "value": row3_LabelText
                    },
                    "col_2": {
                        "color": row3_Color,
                        "text-align": "center",
                        "value": " " + format_username(last_tip_username) + ' (' + last_tip_amount + ')'
                    },
                }
            }
        };
    } else {
        return {
            'template': '3_rows_of_labels',
            'row1_label': row1_LabelText + ':',
            'row1_value': '' + total_tipped + ' / ' + cb.settings.tokens,
            'row2_label': row2_LabelText + ':',
            'row2_value': " " + format_username(high_tip_username) + ' (' + high_tip_amount + ')',
            'row3_label': row3_LabelText + ':',
            'row3_value': " " + format_username(last_tip_username) + ' (' + last_tip_amount + ')'
        };
    }
});

cb.drawPanel();
