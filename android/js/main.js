$(function() {
	var concepts_topics = [{
		short_title: "Activity",
		title: "基本流程元件",
		link: 'activity.html'
	}, {
		short_title: "Intent",
		title: "連結Activity的Intent",
		link: 'intent.html'
	}	
	];
	var blocks_topics = [
	{
		short_title: "Toast",
		title: "提示訊息",
		link: 'toast.html'
	}, {
		short_title: "Dialog",
		title: "對話視窗",
		link: 'dialog.html'
	}, {
		short_title: "View & Activity",
		title: "View與Activity的關係",
		link: 'view_and_activity.html'
	}, {
		short_title: "Button",
		title: "按鈕與Click事件",
		link: 'buttonclick.html'
	}, {
		short_title: "Camera",
		title: "照相功能",
		link: 'camera.html'
	}, {
		short_title: "Gallery",
		title: "選取相片集",
		link: 'gallery.html'
	}, {
		short_title: "ShareIntent",
		title: "分享到其它App",
		link: 'shareintent.html'
	}, {
		short_title: "ScreenCapture",
		title: "手機截圖",
		link: 'screencapture.html'
	}, {
		short_title: "SplashScreen",
		title: "製作登入畫面",
		link: 'splashscreen.html'
	}, {
		short_title: "Vibrator",
		title: "震動",
		link: 'vibrator.html'
	}
	];

	$.each(concepts_topics, function(index, topic) {
		var topic_div = $("<div class='block' onClick='window.location.href=\"{2}\"'><p class='title'>{0}<p>{1}</div>"
			.format(topic["short_title"], topic["title"], topic["link"]));
		$('#concept_section').append(topic_div);
	});
	
	$.each(blocks_topics, function(index, topic) {
		var topic_div = $("<div class='block' onClick='window.location.href=\"{2}\"'><p class='title'>{0}<p>{1}</div>"
			.format(topic["short_title"], topic["title"], topic["link"]));
		$('#blocks_section').append(topic_div);
	});	
});