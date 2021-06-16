const db = uniCloud.database()
const $ = db.command.aggregate
//运行在云端（服务器端）的函数
exports.main = async (event, context) => {
	const {
		  user_id,
			name,
			page=1,
			pageSize=10
				} = event
	
	let matchObj = {}
	if (name !=='全部') {
		matchObj = {
			classify: name
		}
	}
	
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids || []
	//聚合：更精细化的处理数据，求和等
	const list = await db.collection('article')
	.aggregate()
	//追加字段
	.addFields({
		is_like:$.in(['$_id', article_likes_ids])
	})
	.match(matchObj)
	.project({
		content:0
	})
	.skip(pageSize*(page - 1))
	.limit(pageSize)
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
