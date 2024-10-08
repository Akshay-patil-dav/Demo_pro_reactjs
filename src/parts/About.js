import React from 'react';

const About = () => {
    return (
        <>
            <div className='head-abour' >
                <h1 className='h1-hed'>Have you ever posted any photo on social media?</h1><br />
                <h2 className='h2-bio container '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h2>
                <br /><br /><br/><br/>

                <div class="container">
                    <div class="row">
                        <div class="col left">
                            <div class="row grit">
                                <div class="col-sm-6">
                                    <div class="">
                                        <div class="card-body">
                                            <h5 class="card-title">Sed ut perspiciatis</h5> <br/>
                                            <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="">
                                        <div class="card-body">
                                            <h5 class="card-title">Lorem ipsum dolor</h5><br/>
                                            <p class="card-text">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="">
                                        <div class="card-body">
                                            <h5 class="card-title">Nemo enim ipsam</h5><br/>
                                            <p class="card-text">Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col right">
                            <img src='https://s3-alpha-sig.figma.com/img/a176/1b0f/cca829be2ec39306f4a3d85d585418f9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YOAew77ue~AyDd0vtTO5JbBLUfxEkfg45ld43fHXTsCMTDrnGR2-am57keD11iFl1FWX6~Z~R-M-~DF~R0zKhCfHMDBfA-ekUXFgFJJyayWiN8fzxLgBOa77pTCx~eYpaJqsRRFbp6QrMJsX29Bdh2Q8zC81ph4RsPEvZCFzVZ7LvFoIw7u~p0C6HXOukrER9PcIrGwAIUg7DpRAHhAYq~TEkn7WR3jQNz6ol~onF8JiAajDmXGd6bJEqNwqAULKliN9L~TpCujJgH3deFFESydHh0x1dca2Co89bRgetMdr72t2VG-V9hrK9Jq9~FdKofiexyYYmM7HjHKjyC~dLQ__' className='img-About' />
                        </div>
                    </div>
                </div>
            </div><br/><br/><br/>
            <div className='box-100' ></div>
        </>
    );
}

export default About;
