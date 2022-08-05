import { Button, Divider, Form, Header, List, TextArea } from "semantic-ui-react";

export default function About() {
    const aboutData = [
        {
            id: 1,
            type: 'text',
            icon: 'users',
            content: '공주',
        },{
            id: 2,
            type: 'text',
            icon: 'marker',
            content: '수원 광교',
        },{
            id: 3,
            type: 'link',
            href: 'mailto:ds92ko@gmail.com',
            icon: 'mail',
            content: 'ds92ko@gmail.com',
        },{
            id: 4,
            type: 'link',
            href: '/',
            icon: 'linkify',
            content: 'Next js 연습하기',
        },
    ]
    return (
        <div>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                회사 소개
            </Header>
            <Divider />
            <List>
                {aboutData.map((data) => (
                    data.type === 'text' ? (
                        <List.Item key={data.id}>
                            <List.Icon name={data.icon} />
                            <List.Content>{data.content}</List.Content>
                        </List.Item>
                    ) : (
                        <List.Item key={data.id}>
                            <List.Icon name={data.icon} />
                            <List.Content><a href={data.href}>{data.content}</a></List.Content>
                        </List.Item>
                    )
                ))}
            </List>
            <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                문의 사항
            </Header>
            <Divider />
            <Form>
                <Form.Field>
                    <label>제목</label>
                    <input />
                </Form.Field>
                <Form.Field>
                    <label>내용</label>
                    <TextArea />
                </Form.Field>
                <Button color="green">보내기</Button>
            </Form>
        </div>    
    );
}