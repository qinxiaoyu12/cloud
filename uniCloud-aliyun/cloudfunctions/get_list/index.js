const db = uniCloud.database()
//运行在云端（服务器端）的函数
exports.main = async (event, context) => {
	const {name} = event
	
	let matchObj = {}
	if (name !=='全部') {
		matchObj = {
			classify: name
		}
	}
	//聚合：更精细化的处理数据，求和等
	const list = await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content:0
	})
	.end()
	//接受分类，通过分类去筛选数据
	// const collection = db.collection('user')
	
	// const list = await db.collection('article')
	// .field({
	// 	//true只返回这个字段，false不返回这个字段
	// 	content:false
	// })
	// .get()
	
	return {
		code:200,
		msg:'数据请求成功',
		data:list.data
	}
};
