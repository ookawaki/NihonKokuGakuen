/*
 * 回答の条件によって別フィールドの活性/非活性を切り替える
 */
 
(function() {
    "use strict";
    

    //レコードの追加、編集、詳細画面で適用する
    var events = [
        'app.record.detail.show',
        'app.record.create.show',
        'app.record.edit.show',
        'app.record.create.change.approvalYMD1', 
        'app.record.edit.change.approvalYMD1'
        ];

    kintone.events.on(events, function(event) {
    
    	var record = event['record'];
    	
        //初期は非活性化
        record['approvalYMD2']['disabled'] = true;    //承認日2
        record['approvalYMD3']['disabled'] = true;    //承認日3
        record['approvalYMD4']['disabled'] = true;    //承認日4
        record['approvalYMD5']['disabled'] = true;    //承認日5
        //初期は非表示
	    kintone.app.record.setFieldShown('isPresidentialDecide', false);  //理事長決済
	    kintone.app.record.setFieldShown('isPresidentialYMD', false);     //理事長決済日
	    kintone.app.record.setFieldShown('isOfficeConfirmation', false);  //事務局確認
	    kintone.app.record.setFieldShown('confirmationYMD', false);       //事務局確認日
        kintone.app.record.setFieldShown('budgetYM', false);              //支出年月
        kintone.app.record.setFieldShown('key', false);                    //予算キー
        
        
        if (record['approvalYMD1']['value'] != "") {
            //承認日1に入力がある場合
            //record['approvalYMD2']['disabled'] = false;    //承認日2
        	//record['approvalYMD3']['disabled'] = false;    //承認日3
        	record['approvalYMD4']['disabled'] = false;    //承認日4
        	record['approvalYMD5']['disabled'] = false;    //承認日5
        	
        }
        
        
        
        
        
        return event;
    });
    
})(); 