import React from 'react';
import Draggable from "gsap/Draggable"
import './style.css'

const elements = ['.yy-base', 
    '.yy-top',
    '.ye-base', 
    '.ye-top1',
    '.ye-top2',
    '.yl1', 
    '.yl2',
    '.yo-base', 
    '.yo-top',
    '.yw-base', 
    '.yw-top',
    '.cc1-base', 
    '.cc1-top',
    '.co-base', 
    '.co-top',
    '.cl1', 
    '.cl2',
    '.ce1-base', 
    '.ce1-top1',
    '.ce1-top2',
    '.cc2-base', 
    '.cc2-top',
    '.ct-base', 
    '.ct-top', 
    '.ci-base', 
    '.ci-top',
    '.cv-base', 
    '.cv-top',
    '.ce2-base', 
    '.ce2-top1',
    '.ce2-top2']

class Homepage extends React.Component {
    componentDidMount() {
        this.makeDraggable()
    }
      
    makeDraggable = () => {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            Draggable.create(element, {
            type: 'x,y',
            bounds:".App",
            throwProps: true,
            });
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='logo-container'>
                {/* Y */}
                <svg className="multiply yy-base" width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0384521" width="39" height="115" />
                </svg>
                <svg className="multiply yy-top" width="115" height="59" viewBox="0 0 115 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115 0.0384521H0L57.5 58.0385L115 0.0384521Z" />
                </svg>
                {/* E */}
                <svg className="multiply ye-base" width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                </svg>
                <svg className="multiply ye-top1" width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                </svg>
                <svg className="multiply ye-top2" width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0384521V58.0385H96L0 0.0384521Z"/>
                </svg>
                {/* L */}
                <svg className="multiply yl1" width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                </svg>
                {/* L */}
                <svg className="multiply yl2" width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                </svg>
                {/* O */}
                <svg className="multiply yo-base" width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="57.5" cy="57.5385" r="57.5" />
                </svg>
                <svg className="multiply yo-top" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                </svg>
                {/* w */}
                <svg className="multiply yw-base" width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M77 0.0384521H0L77 115.038V0.0384521Z"/>
                </svg>
                <svg className="multiply yw-top" width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M77 0.0384521H0L77 115.038V0.0384521Z"/>
                </svg>
                

                {/* C */}
                <svg className="multiply cc1-base" width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                </svg>
                <svg className="multiply cc1-top" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                </svg>
                {/* O */}
                <svg className="multiply co-base" width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="57.5" cy="57.5385" r="57.5" />
                </svg>
                <svg className="multiply co-top" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                </svg>
                {/* L */}
                <svg className="multiply cl1" width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                </svg>
                {/* L */}
                <svg className="multiply cl2" width="77" height="116" viewBox="0 0 77 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.62939e-06 115.038L77 115.038L-2.42423e-06 0.0384513L7.62939e-06 115.038Z" />
                </svg>
                {/* E */}
                <svg className="multiply ce1-base" width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                </svg>
                <svg className="multiply ce1-top1" width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                </svg>
                <svg className="multiply ce1-top2" width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0384521V58.0385H96L0 0.0384521Z"/>
                </svg>
                {/* C */}
                <svg className="multiply cc2-base" width="58" height="116" viewBox="0 0 58 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 57.5385C0 89.2948 25.9675 115.038 58 115.038V0.0384521C25.9675 0.0384521 0 25.7821 0 57.5385Z" />
                </svg>
                <svg className="multiply cc2-top" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="23" cy="22.5385" rx="23" ry="22.5" />
                </svg>
                {/* T */}
                <svg className="multiply ct-base" width="39" height="116" viewBox="0 0 39 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0384521" width="39" height="115" />
                </svg>
                <svg className="multiply ct-top" width="115" height="40" viewBox="0 0 115 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M115 39.0385L-1.70474e-06 39.0385L0 0.0384471L115 0.0384521L115 39.0385Z" />
                </svg>
                {/* I */}
                <svg className="multiply ci-base" width="38" height="97" viewBox="0 0 38 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0384521" width="38" height="96" />
                </svg>
                <svg className="multiply ci-top" width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="19" cy="19.5385" rx="19" ry="19.5" />
                </svg>
                {/* V */}
                <svg className="multiply cv-base" width="116" height="97" viewBox="0 0 116 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M58 96.0385L0 0.0384521H116L58 96.0385Z" />
                </svg>
                <svg className="multiply cv-top" width="77" height="58" viewBox="0 0 77 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.5 57.0385L0 0.0384521H77L38.5 57.0385Z" />
                </svg>
                {/* E */}
                <svg className="multiply ce2-base" width="63" height="116" viewBox="0 0 63 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0769 34.6154L39.0769 0H0.615387V115.385H39.0769L39.0769 80.7692C51.822 80.7692 62.1538 70.4373 62.1538 57.6923C62.1538 44.9473 51.822 34.6154 39.0769 34.6154Z" />
                </svg>
                <svg className="multiply ce2-top1" width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0384521H96L0 58.0385V0.0384521Z" />
                </svg>
                <svg className="multiply ce2-top2" width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.0384521V58.0385H96L0 0.0384521Z"/>
                </svg>
                </div>


            </div>
        )
    }
}

export default Homepage