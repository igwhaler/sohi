import URI from 'urijs';

export default function SelfUri() {
    const url = URI('/builder/rc/edit{?q*}').query({
        foo: 'bar',
        abc: '123'
    });

    console.log(url.toString());

    return null;
}
