import '../css/body.scss';

function Body() {
    const boards = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1731929464035-1ba6df40565f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '제목 1',
            contents: '올해의 내용은 여기와 같습니다. 내용의 길이는 조금 길게 작성이 될 것입니다.',
            createdAt: '2024-11-01 10:00:00',
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1731929464035-1ba6df40565f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '제목 2',
            contents: '올해의 내용은 여기와 같습니다. 내용의 길이는 조금 길게 작성이 될 것입니다.',
            createdAt: '2024-11-15 09:35:00',
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1731929464035-1ba6df40565f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '제목 3',
            contents: '올해의 내용은 여기와 같습니다. 내용의 길이는 조금 길게 작성이 될 것입니다.',
            createdAt: '2024-11-21 23:48:58',
        }
    ];

    return (
        <div className="body">
            <div className="body-contents">
                {/** News */}
                <h2>News</h2>
                <div className='news'>
                {
                    boards.map((board) => 
                    <div className='item'>
                        <img src={board.imageUrl} width={250} height={180} alt="board-image" />
                        <p className='item-title'>{board.title}</p>
                        <p>{board.contents}</p>
                        <p className='item-date'>{board.createdAt}</p>
                    </div>
                )}
                </div>

                {/** About */}
                <h2>About</h2>
                <div className='about'>
                    <img src="https://images.unsplash.com/photo-1543693087-639a38025487?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={550} alt="about-us" />
                    <div className='about-content'>
                        <span>기업의 소개는 어쩌구 저쩌구 그렇습니다. 기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.기업의 소개는 어쩌구 저쩌구 그렇습니다.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;